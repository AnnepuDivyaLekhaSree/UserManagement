import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {User} from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/user-data.json';

  constructor(private http: HttpClient) {}

  getUsersFromLocalFile(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        map((response: any) => response.users),
        catchError((error: any) => {
          console.error('Error loading users from JSON file:', error);
          return of([]);
        })
      );
  }
}
