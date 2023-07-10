import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl: string = 'https://musicprosolutions.tech/backend/api/login';
  private loginSuccess: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  private setSession(context: User) {
    try {
      const token = context.token;
      const id = context.id;

      if (token !== undefined) {
        localStorage.setItem('token', token);
      }

      localStorage.setItem('id', id.toString());
      this.loginSuccess.next(true);
    } catch (error) {
      this.loginSuccess.next(false);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(this.loginUrl, { email, password })
      .pipe(tap((response) => this.setSession(response)));
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  isLogedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.loginSuccess.next(false);
  }
}
