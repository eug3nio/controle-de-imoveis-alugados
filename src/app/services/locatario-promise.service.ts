import { Observable } from 'rxjs';
import { Locatario } from './../model/locatario';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocatarioPromiseService {
  URL = 'http://localhost:3000/locatarios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Locatario[] | undefined> {
    return this.httpClient.get<Locatario[]>(`${this.URL}`).pipe();
  }

  getById(id: number): Observable<Locatario[] | undefined> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};
    return this.httpClient.get<Locatario[]>(`${this.URL}`, options).pipe();
  }

  save(locatario: Locatario): Observable<Locatario | undefined> {
    return this.httpClient
      .post<Locatario>(this.URL, JSON.stringify(locatario), this.httpOptions)
      .pipe();
  }

  patch(locatario: Locatario): Observable<Locatario | undefined> {
    return this.httpClient
      .patch<Locatario>(
        `${this.URL}?id=${locatario.id}`,
        JSON.stringify(locatario),
        this.httpOptions
      )
      .pipe();
  }

  update(locatario: Locatario): Observable<Locatario | undefined> {
    return this.httpClient
      .put<Locatario>(
        `${this.URL}?id=${locatario.id}`,
        JSON.stringify(locatario),
        this.httpOptions
      )
      .pipe();
  }
}
