import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getByEmail(email: string): Promise<Usuario[] | undefined> {
    return this.httpClient.get<Usuario[]>(`${this.URL}?email=${email}`).toPromise();
  }

  save(user: Usuario): Promise<Usuario | undefined> {
    return this.httpClient
      .post<Usuario>(this.URL, JSON.stringify(user), this.httpOptions)
      .toPromise();
  }

  patch(user: Usuario): Promise<Usuario | undefined> {
    return this.httpClient
      .patch<Usuario>(
        `${this.URL}/${user.id}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .toPromise();
  }

  update(user: Usuario): Promise<Usuario | undefined> {
    return this.httpClient
      .put<Usuario>(
        `${this.URL}/${user.id}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .toPromise();
  }
}
