import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public login(): Observable<any> {
    const data = {
      "login":"letscode",
      "senha":"lets@123"
    };

    return this.httpClient.post<any>(`${environment.url}login`, data);
  }

  public setUserToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public get userToken() {
    return sessionStorage.getItem('token');
  }
}
