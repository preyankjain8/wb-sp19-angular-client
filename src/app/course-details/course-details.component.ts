import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {

  constructor(private service: CourseServiceClient, private route: ActivatedRoute) { }
  subscription;
  courseId = 0;
  moduleId = 0;
  lessonId = 0;
  topicId = 0;
  course;
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.service
          .findCourseById(this.courseId)
          .then(course => this.course = course);
      }
    );
    this.service
      .findCourseById(this.courseId)
      .then(course => this.course = course);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
