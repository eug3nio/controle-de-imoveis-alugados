import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioPromiseService {
  URL = 'http://localhost:3000/usuarios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getByEmail(email: string): Observable<Usuario[] | undefined> {
    const query: HttpParams = new HttpParams().set('email', email);
    const options = email ? { params: query } : {};
    return this.httpClient.get<Usuario[]>(`${this.URL}`, options).pipe();
  }

  save(user: Usuario): Observable<Usuario | undefined> {
    return this.httpClient
      .post<Usuario>(this.URL, JSON.stringify(user), this.httpOptions)
      .pipe();
  }

  patch(user: Usuario): Observable<Usuario | undefined> {
    return this.httpClient
      .patch<Usuario>(
        `${this.URL}/${user.id}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe();
  }

  update(user: Usuario): Observable<Usuario | undefined> {
    return this.httpClient
      .put<Usuario>(
        `${this.URL}/${user.id}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe();
  }
}
