import {Component, OnDestroy, OnInit} from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit, OnDestroy {
  subscription;
  topicId = 0
  widgets = []
  constructor(private service: WidgetServiceClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.topicId = params['topicId'];
        this.service
          .findWidgetsForTopic(this.topicId)
          .then(widgets => this.widgets = widgets);
      }
    );
    this.service
      .findWidgetsForTopic(this.topicId)
      .then(widgets => this.widgets = widgets);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
