
import {EventsItemComponent, EventDetailComponent, CreateEventComponent, Error404Component, CreateSessionComponent} from './events/index'
import { Routes } from '@angular/router';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';
import { CreateDeactivateGuard } from './create-deactivate.service';
//import { EventResolver } from './events/event-resolver.service';

//resolve:{events:EventResolver} }
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:[CreateDeactivateGuard] },
  { path: 'events', component: EventsItemComponent, },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'events/:id', component: EventDetailComponent, canActivate:[EventRouteActivator] },
  {path:'404', component:Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path:'user',
  loadChildren:()=>import('./events/user/user.module').then(m => m.UserModule)}
];
