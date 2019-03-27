import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.css']
})
export class LinkWidgetComponent implements OnInit {
  @Input()
  widget;
  constructor() { }

  ngOnInit() {
  }

}
