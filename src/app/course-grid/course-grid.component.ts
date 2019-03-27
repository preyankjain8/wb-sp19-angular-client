import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses = []
  modules = []
  selectedCourse = {}

  selectCourse = course => {
    this.selectedCourse = course;
  }

  ngOnInit() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
