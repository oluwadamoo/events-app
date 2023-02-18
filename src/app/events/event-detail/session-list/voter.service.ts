import { ISession } from './../../event.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class VoterService{

  deleteVoter(session:ISession, voterName:string){
    session.voters = session.voters.filter(voter=> voter !== voterName )
  }

  addVoter(session:ISession, voterName:string){
    session.voters.push(voterName)
  }

  userHasVoted(session:ISession, voterName:string){
     return session.voters.some(voter=>voter === voterName)
   }
}
