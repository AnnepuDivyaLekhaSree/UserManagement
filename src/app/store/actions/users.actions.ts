import {createAction, props} from '@ngrx/store';
import {User} from '../../shared/models/user';

export const updateUser = createAction('[User] Update User', props<{ id: number, updatedUser: User }>());
export const usersLoaded = createAction('[User] Users Loaded', props<{ users: User[] }>());
