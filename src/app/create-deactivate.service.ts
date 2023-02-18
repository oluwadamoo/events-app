import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';


export interface canComponentDeactivate{
  canDeactivate:()=> Observable<boolean>|Promise<boolean>|boolean;
}
export class CreateDeactivateGuard implements CanDeactivate<canComponentDeactivate>{

  constructor() { }

  canDeactivate(component:canComponentDeactivate):Observable<boolean>|Promise<boolean>|boolean{
    return component.canDeactivate();
  }
}
