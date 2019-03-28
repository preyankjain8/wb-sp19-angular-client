import {Component, OnDestroy, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit, OnChanges {
  @Input()
  moduleId;
  @Input()
  courseId;
  @Input()
  selectedLessonId;
  constructor(private service: LessonServiceClient, private route: ActivatedRoute, private router: Router) { }
  subscription;
  lessons = [];
  selectedLesson = {}
  lessonSelected = lesson => {
    this.selectedLessonId = lesson.id;
    this.router.navigate(['course/' + this.courseId + '/module/' + this.moduleId + '/lesson/' + lesson.id + '/topic']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['moduleId'] !== undefined){
      this.moduleId = changes['moduleId'].currentValue;
    }
    if (changes['selectedLessonId'] !== undefined){
      this.selectedLessonId = changes['selectedLessonId'].currentValue;
    }
    this.service
      .findLessonsForModule(this.moduleId).catch(reason => console.log(reason.toString()))
      .then(lessons => this.lessons = lessons)
      .then(value => this.checkEmptyList());

  }

  checkEmptyList() {
    if (this.lessons === undefined || this.lessons.length === 0) {
      alert('No lessons for selected module!');
    }
  }
  ngOnInit() {
    this.service
      .findLessonsForModule(this.moduleId).catch(reason => console.log(reason.toString()))
      .then(lessons => this.lessons = lessons)
      .then(value => this.checkEmptyList());
  }

}
