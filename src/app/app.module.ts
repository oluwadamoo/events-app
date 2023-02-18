import { LocationValidator } from './events/create-event/location-validator.directive';
import { UpvoteComponent } from './events/event-detail/session-list/upvote.component';
import {
  TOASTR_TOKEN,
  IToastr,
  JQUERY_TOKEN,
  SimpleModalComponent,
  ModalDirective,
} from './events/common/index';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import {
  EventsItemComponent,
  EventListComponent,
  EventDetailComponent,
  CreateEventComponent,
  Error404Component,
  CreateSessionComponent,
  DurationPipe,
} from './events/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './events/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-detail/session-list/session-list.component';
import { CollapsibleSessionComponent } from './events/event-detail/collapsibleSession.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { CreateDeactivateGuard } from './create-deactivate.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

declare let toastr: IToastr;
declare let jQuery: object;
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventsItemComponent,
    NavComponent,
    EventDetailComponent,
    CreateEventComponent,
    CollapsibleSessionComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    SimpleModalComponent,
    ModalDirective,
    UpvoteComponent,
    LocationValidator,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    CreateDeactivateGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
