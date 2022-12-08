import { Locatario } from './../model/locatario';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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

  getAll(): Promise<Locatario[] | undefined> {
    return this.httpClient.get<Locatario[]>(`${this.URL}`).toPromise();
  }

  getById(id: number): Promise<Locatario[] | undefined> {
    return this.httpClient.get<Locatario[]>(`${this.URL}?id=${id}`).toPromise();
  }

  save(locatario: Locatario): Promise<Locatario | undefined> {
    return this.httpClient
      .post<Locatario>(this.URL, JSON.stringify(locatario), this.httpOptions)
      .toPromise();
  }

  patch(locatario: Locatario): Promise<Locatario | undefined> {
    return this.httpClient
      .patch<Locatario>(
        `${this.URL}?id=${locatario.id}`,
        JSON.stringify(locatario),
        this.httpOptions
      )
      .toPromise();
  }

  update(locatario: Locatario): Promise<Locatario | undefined> {
    return this.httpClient
      .put<Locatario>(
        `${this.URL}?id=${locatario.id}`,
        JSON.stringify(locatario),
        this.httpOptions
      )
      .toPromise();
  }
}
