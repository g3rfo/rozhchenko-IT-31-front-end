import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})

export class Auth {
  private authState = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  authState$ = this.authState.asObservable();

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.get<any[]>('users').pipe(
      map((users) => {
        const exists = users.some(u => u.email === user.email);

        if (exists) {
          throw new Error('User with this email already exists');
        }

        return user;
      }),
      map(() => {
        return this.http.post('users', user).subscribe();
      }),
      catchError(err => throwError(() => err))
    );
  }

  login(credentials: any) {
    return this.http.get<any[]>('users').pipe(
      map((users) => {
        const user = users.find(u =>
          u.email === credentials.email &&
          u.password === credentials.password
        );

        if (!user) {
          throw new Error('Invalid email or password');
        }

        // Fake JWT token
        const fakeToken = btoa(JSON.stringify({ email: user.email }));

        localStorage.setItem('token', fakeToken);
        localStorage.setItem('user', JSON.stringify(user));

        this.authState.next(true);
        return user;
      }),
      catchError(err => throwError(() => err))
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authState.next(false);
  }

  isLoggedIn(): boolean {
    return this.authState.value;
  }
}
