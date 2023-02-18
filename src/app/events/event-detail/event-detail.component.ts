
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event:IEvent
  sessions:ISession[]
  id:string|null
  filterBy:string ="all"
  sortBy:string ="votes"
  addSession:boolean = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(){
    // this.route.params.forEach((params:Params)=>{
    //   this.event = this.eventService.getEventsId(+params['id']);
    //   this.addSession = false;
    // })
    // this.event = this.eventService.getEventsId(
    //   +this.route.snapshot.params['id']
    this.id = this.route.snapshot.paramMap.get('id');
    // const emptyEvent = {} as IEvent;
    // return searchedEventById ? searchedEventById:emptyEvent

     if(this.id) this.eventService.getEventId(this.id).subscribe(e=>{if(e){
      this.event = e;
      this.sessions = this.eventService.getSession(this.event)
      }
     }
)
console.log(this.event);
  }

  onAddSession(){
    this.addSession = true;
  }

  saveNewSession(session:ISession){
    // const newArr = this.event.sessions?.map(s => s.id) || [];
    // let nextIndex = Math.max.apply(null, newArr);
    // session.id = nextIndex + 1;
    // this.event.sessions?.push(session);
    // this.eventService.updateEvent(this.event);
    // this.addSession = false;
    this.eventService.addSession(this.id, session);
    this.addSession = false;
    console.log(session.key);

  }

  cancelSession(){
    this.addSession = false;
  }
}
