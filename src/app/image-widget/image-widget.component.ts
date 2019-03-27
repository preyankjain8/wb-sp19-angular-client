import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.css']
})
export class ImageWidgetComponent implements OnInit {

  @Input()
  widget;
  constructor() { }

  ngOnInit() {
  }

}
