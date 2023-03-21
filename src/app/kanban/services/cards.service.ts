import { UserService } from './user.service';
import { Card } from './../models/Card';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {

  }

  public getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${environment.url}cards`, { headers: this.defaultHeaders });
  }

  public postCard(card: Card): Observable<Card> {
    return this.httpClient.post<Card>(`${environment.url}cards`, card, { headers: this.defaultHeaders });
  }

  public putCard(card: Card): Observable<Card> {
    return this.httpClient.put<Card>(`${environment.url}cards/${card.id}`, card, { headers: this.defaultHeaders });
  }

  public deleteCard(Idcard: string): Observable<Card[]> {
    return this.httpClient.delete<Card[]>(`${environment.url}cards/${Idcard}`, { headers: this.defaultHeaders });
  }

  private get defaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.userToken}`
    });
  }
}
