import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { canComponentDeactivate } from 'src/app/create-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit, CanDeactivate<canComponentDeactivate> {
  createdEvent:{};
  isDirty = false;
  constructor(private router: Router, private eventService:EventService, private dataStorageService:DataStorageService) {}

  ngOnInit(): void {}

  saveEvent(values:any){
    this.eventService.createEvent(values);
    this.router.navigate(['/events']);
    this.isDirty = true;
    // this.dataStorageService.storeDate();
  }


  canDeactivate():Observable<boolean>|Promise<boolean>|boolean{
    if(!this.isDirty)  return (confirm('Do you want to discard changes?'))
    return true;
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
