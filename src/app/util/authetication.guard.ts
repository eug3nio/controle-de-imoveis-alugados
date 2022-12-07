import { Constantes } from './constantes';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { WebStorageUtil } from './web-storage-util';
import { Usuario } from '../model/usuario';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let url: string = state.url;
    let user: Usuario = WebStorageUtil.get(Constantes.USERNAME_KEY) as Usuario;

    if (user == undefined) {
      this.router.navigateByUrl('/login');
      return false;
    }

    if (!user) {
      //redireciona para uma view para explicar o que aconteceu
      this.router.navigateByUrl('/nao-autorizado');
      return false;
    }

    if (!user.isAdmin) {
      //redireciona para uma view para explicar o que aconteceu
      this.router.navigateByUrl('/nao-autorizado');
      return false;
    }

    return true;
  }
}
