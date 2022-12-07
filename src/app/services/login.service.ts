import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Constantes } from '../util/constantes';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSource = new Subject<boolean>();
  constructor(private router: Router) {}

  login() {
    WebStorageUtil.set(Constantes.LOGGED_IN_KEY, true);
    this.loginSource.next(true);
    this.router.navigate(['contrato/list']);
  }

  logout() {
    WebStorageUtil.set(Constantes.USERNAME_KEY, undefined);
    WebStorageUtil.set(Constantes.LOGGED_IN_KEY, false);
    this.loginSource.next(false);
    this.router.navigate(['']);
  }

  asObservable(): Observable<boolean> {
    return this.loginSource;
  }
}
