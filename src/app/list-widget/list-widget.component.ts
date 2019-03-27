import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  @Input()
  widget
  lines = []
  constructor() { }

  ngOnInit() {
    if (this.widget !== undefined) {
      this.lines = this.widget.text.split('\n');
    }
  }

}
