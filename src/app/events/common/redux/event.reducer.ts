import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { EventI } from './event.interface';
import * as EventAction from './event.action';
import { state } from '@angular/animations';

export interface EventState {
  events: EventI[];
}
const initialState: EventState = {
  events: [],
};

export const EventReducer = createReducer<EventState>(
  initialState,
  on(EventAction.LoadEventsSuccess, (state, action): EventState => {
    return {
      ...state,
      events: action.events,
    };
  })
);
