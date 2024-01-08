import { createReducer, on } from '@ngrx/store';
import {updateUser, usersLoaded} from '../actions/users.actions';
import {User} from '../../shared/models/user';

export interface UserState {
  users: User[];
  error: any;
}

const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { id, updatedUser }) => ({
    ...state,
    users: state.users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)),
  })),
  on(usersLoaded, (state, { users }) => ({
    ...state,
    users: users,
    error: null,
  }))
);
