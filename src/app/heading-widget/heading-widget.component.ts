import { Component, OnInit, Input } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-heading-widget',
  templateUrl: './heading-widget.component.html',
  styleUrls: ['./heading-widget.component.css']
})
export class HeadingWidgetComponent implements OnInit {
  @Input()
  widget
  constructor() { }
  ngOnInit() {
  }

}
