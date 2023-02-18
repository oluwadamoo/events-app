
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveSession= new EventEmitter<ISession>();
  @Output() cancelSession= new EventEmitter();
  sessionForm:FormGroup;
  name: FormControl;
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract:FormControl
  constructor() { }

  ngOnInit(){
    this.name= new FormControl('', Validators.required);
    this.presenter= new FormControl('', Validators.required);
    this.duration= new FormControl('', Validators.required);
    this.level= new FormControl('', Validators.required);
    this.abstract= new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.sessionForm = new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
    })
  }

  onSaveSession(sessionValues:any){
    let session:ISession ={
      key:'',
      id:'',
      name: sessionValues.name,
      presenter:sessionValues.presenter,
      duration: +sessionValues.duration,
      level: sessionValues.level,
      abstract:sessionValues.abstract,
      voters:[]
    }
    this.saveSession.emit(session);
  }

  onCancel(){
    this.cancelSession.emit();
  }
}
