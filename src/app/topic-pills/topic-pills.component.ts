import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit, OnDestroy {
  constructor(private service: TopicServiceClient, private route: ActivatedRoute, private router: Router) { }
  subscription;
  moduleId = {}
  courseId = {}
  lessonId = 0
  topics = []
  topic = {}
  topicSelected = topic => {
    this.topic = topic;
    this.router.navigate(['course/' + this.courseId + '/module/' +
    '' + this.moduleId + '/lesson/' + this.lessonId + '/topic/' + topic.id + '/widget']);
  }
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.lessonId = params['lessonId'];
        this.moduleId = params.moduleId;
        this.courseId = params.courseId;
        this.service
          .findTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    );
    this.service
      .findTopicsForLesson(this.lessonId)
      .then(topics => this.topics = topics);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
