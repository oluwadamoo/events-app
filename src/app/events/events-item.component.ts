import { AngularFireDatabase } from '@angular/fire/compat/database';

import { EventService } from './shared/event.service';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IEvent } from './event.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-Item',
  templateUrl: 'events-item.component.html',
})
export class EventsItemComponent implements OnInit, OnDestroy {
  events: IEvent[];
  subEvents: Subscription;
  constructor(private eventService: EventService) {
    this.subEvents = this.eventService
      .getEvents()
      .subscribe((events) => (this.events = events));
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subEvents.unsubscribe();
  }
}
