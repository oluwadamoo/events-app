import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsibleSession',
  template: `
    <div class="well">
      <h4>
        <ng-content select="[well-title]"></ng-content>
        <span class="toggle glyphicon pointable"
       [ngClass]="{
        'glyphicon-plus':!toggle,
        'glyphicon-minus':toggle
       }"
        (click)="onClick()"></span>
      </h4>
      <ng-content *ngIf="toggle" select="[well-body]"></ng-content>
    </div>
  `,
  styles:[`
  .well{
    padding:10px;
  }
  .toggle{
  background-color: #df691a;;
  color: white;
  padding: 5px;
  float: right;
 }

  `]
})

export class CollapsibleSessionComponent implements OnInit {
  constructor() { }
  toggle:boolean = false;
  ngOnInit() { }
  onClick(){
    this.toggle = !this.toggle
  }
}
