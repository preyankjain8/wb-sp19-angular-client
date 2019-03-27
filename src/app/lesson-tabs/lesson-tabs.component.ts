import {Component, OnDestroy, OnInit} from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit, OnDestroy {
  constructor(private service: LessonServiceClient, private route: ActivatedRoute, private router: Router) { }
  subscription;
  courseId = {}
  moduleId = {}
  lessons = []
  selectedLesson = {}
  lessonSelected = lesson => {
    this.selectedLesson = lesson;
    this.router.navigate(['course/' + this.courseId + '/module/' + this.moduleId + '/lesson/' + lesson.id + '/topic']);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.moduleId = params.moduleId;
        this.courseId = params.courseId;
        this.service
          .findLessonsForModule(this.moduleId).catch(reason => console.log(reason.toString()))
          .then(lessons => this.lessons = lessons);
      }
    );
    this.service
        .findLessonsForModule(this.moduleId).catch(reason => console.log(reason.toString()))
        .then(lessons => this.lessons = lessons);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
