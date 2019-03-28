import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges, Input} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit, OnChanges {
  constructor(private service: TopicServiceClient, private route: ActivatedRoute, private router: Router) { }
  @Input()
  moduleId;
  @Input()
  courseId;
  @Input()
  lessonId;
  @Input()
  selectedTopicId;
  topics = []
  topic = {}
  topicSelected = topic => {
    this.selectedTopicId = topic.id;
    this.router.navigate(['course/' + this.courseId + '/module/' +
    '' + this.moduleId + '/lesson/' + this.lessonId + '/topic/' + topic.id + '/widget']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lessonId'] !== undefined){
      this.lessonId = changes['lessonId'].currentValue;
    }
    if (changes['selectedTopicId'] !== undefined){
      this.selectedTopicId = changes['selectedTopicId'].currentValue;
    }
    this.service
      .findTopicsForLesson(this.lessonId)
      .then(topics => this.topics = topics)
      .then(value => this.checkEmptyList());
  }

  checkEmptyList(){
    if (this.topics === undefined || this.topics.length === 0) {
      alert('No topics for selected lesson!');
    }
  }

  ngOnInit() {
    this.service
      .findTopicsForLesson(this.lessonId)
      .then(topics => this.topics = topics)
      .then(value => this.checkEmptyList());
  }
}
