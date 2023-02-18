import { DataStorageService } from './../shared/data-storage.service';
import { EventService } from './../shared/event.service';
import { ISession, IEvent } from './../event.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnDestroy {
  @ViewChild('search') query:any;
  events:IEvent[]
  foundSession:ISession[];
  matchSession:ISession[] = [];
  sessionSub:Subscription;


  constructor(public auth:AuthService, private eventService:EventService, private dataStorageService:DataStorageService) {
    this.sessionSub = eventService.getEvents().subscribe(events=>this.events= events)
  }


  searchSession(search:any){
    this.events.forEach(event=>{
      let key:any
      for(key in event.sessions)
      if(event.sessions){
        if(event.sessions[key].name.toLowerCase().includes(search.value.toLowerCase())) this.matchSession.push(event.sessions[key]);
        return
      }
    });
    if(!search.value) return;
    this.foundSession = this.matchSession ? this.matchSession : [];
    search.value = "";
    this.matchSession = [];
    console.log(this.foundSession);
  }

  fetchEvents(){
    // this.dataStorageService.fetchData().subscribe(data=>{console.log(data);
    console.log();
  }

  ngOnDestroy(){
    this.sessionSub.unsubscribe()
  }

}
