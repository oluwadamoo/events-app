import { EventI } from './event.interface';
import { createAction, props } from '@ngrx/store';

export const loadEvents = createAction('[Events] load events');
export const LoadEventsSuccess = createAction(
  '[Events] load events success',
  props<{ events: EventI[] }>()
);
