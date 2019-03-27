import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-widget',
  templateUrl: './paragraph-widget.component.html',
  styleUrls: ['./paragraph-widget.component.css']
})
export class ParagraphWidgetComponent implements OnInit {
  @Input()
  widget
  constructor() { }

  ngOnInit() {
  }

}
