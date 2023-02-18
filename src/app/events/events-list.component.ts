import { IEvent } from './event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventsList',
  templateUrl: './events-list.component.html',
  styles: [
    `
      .space {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .thumbnail {
        min-height: 250px;
      }
    `,
  ],
})
export class EventListComponent implements OnInit {
  @Input() event: IEvent;
  constructor() {}

  ngOnInit() {}
}
