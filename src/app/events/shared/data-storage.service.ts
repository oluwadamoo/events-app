import { IEvent } from './../event.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase} from '@angular/fire/compat/database';


@Injectable({
  providedIn:'root'
})

export class DataStorageService{
  constructor( private http:HttpClient, private db:AngularFireDatabase ){

  }

  // storeDate():void{
  //   const events = this.eventService.getEvents()
  //   this.http.put(environment.url,events).subscribe(response=>{console.log(response);
  //   }
  //   )
  // }

  // fetchData():Observable<IEvent[]>{
  //   return this.http.get<IEvent[]>(environment.url).pipe(tap(events=>{this.eventService.setEvents(events)}))
  // }


  fetchData(){
    return this.db.list<IEvent>('/events').valueChanges();
  }

  storeData(){
    
  }
}
