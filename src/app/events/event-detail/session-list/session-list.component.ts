import { IEvent } from './../../event.model';
import { VoterService } from './voter.service';
import { AuthService } from './../../shared/auth.service';

import { Component, Input, OnChanges} from '@angular/core';
import { ISession } from '../../event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions?:ISession[]
  @Input() filterBy:string
  @Input() sortBy:string
  visibleSessions?:ISession[]=[]
  toggle:boolean = false
  constructor(public authService:AuthService, private voterService:VoterService) {
    
   }

  ngOnChanges(): void {
    if(this.sessions){
      this.filterSession(this.filterBy);
      this.sortBy==='votes'?this.visibleSessions?.sort(sortByVotes):this.visibleSessions?.sort(sortByName)
    }
  }


  toggleVote(session:ISession):void{
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    }else{
      this.voterService.addVoter(session, this.authService.currentUser.userName)
    }
    if(this.sortBy ==='votes'){
      this.visibleSessions?.sort(sortByVotes)
    }
  }

  userHasVoted(session:ISession):boolean{
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }

  filterSession = (filter:string):void=>{
    if(filter === 'all'){
      this.visibleSessions = this.sessions?.slice(0);
    }else{
      this.visibleSessions = this.sessions?.filter(session=>{
        return session.level.toLowerCase()===filter})
    }
  }

  onclick(){
    this.toggle = !this.toggle
  }
}

function sortByName(s1:ISession, s2:ISession){
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1
}

function sortByVotes(s1:ISession, s2:ISession){
  return s2.voters.length - s1.voters.length
}
