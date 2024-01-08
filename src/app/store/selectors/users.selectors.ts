import { createFeatureSelector, createSelector } from '@ngrx/store';
import {UserState} from '../reducers/users.reducer';

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(
  getUserFeatureState,
  (state) => state.users
);
