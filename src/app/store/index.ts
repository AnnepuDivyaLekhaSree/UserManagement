import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as fromUser from './reducers/users.reducer';
import {environment} from '../../environments/environment.prod';

export interface AppState {
  users: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUser.userReducer,
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  // @ts-ignore
  return (state: AppState, action: any): AppState => {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
