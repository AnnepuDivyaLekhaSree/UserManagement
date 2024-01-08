import { Component, OnInit } from '@angular/core';
import {AppState} from '../store';
import {select, Store} from '@ngrx/store';
import {UserService} from '../services/user.service';
import {User} from '../shared/models/user';
import {updateUser, usersLoaded} from '../store/actions/users.actions';
import {getUsers} from '../store/selectors/users.selectors';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-user-master-list',
  templateUrl: './user-master-list.component.html',
  styleUrls: ['./user-master-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserMasterListComponent implements OnInit {
  editedUser: User | null = null;
  expandedElement: User | null = null;
  columnsToDisplay: string[] = ['id', 'firstName', 'lastName', 'age'];
  dataSource: User[] = [];
  constructor(private store: Store<AppState>, private userService: UserService) {}

  ngOnInit() {
    this.store.pipe(select(getUsers)).subscribe(users => {
      this.dataSource = users;
    });

    this.userService.getUsersFromLocalFile().subscribe(
      (users: User[]) => {
        this.store.dispatch(usersLoaded({ users }));
      }
    );
  }

  // Function to update user details
  updateUserDetails(updatedUser: User) {
    if (this.editedUser) {
      this.store.dispatch(updateUser({ id: this.editedUser.id, updatedUser: this.editedUser }));
      this.editedUser = null; // Clear editedUser after saving changes
    }
  }

  startEdit(user: User) {
    // Create a copy of the user object for editing
    this.editedUser = { ...user };
  }

  // Function to cancel editing
  cancelEdit() {
    this.editedUser = null;
  }
}
