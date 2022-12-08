import { Constantes } from './../util/constantes';
import { UsuarioPromiseService } from './../services/usuario-promise.service';
import { Usuario } from './../model/usuario';
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioPromiseService],
})
export class LoginComponent {
  loginUsuario!: Usuario;
  constructor(
    private loginService: LoginService,
    private usuarioPromiseService: UsuarioPromiseService
  ) {}

  ngOnInit(): void {
    this.loginUsuario = new Usuario('', '');
  }

  onLogin() {
    this.usuarioPromiseService
      .getByEmail(this.loginUsuario.email)
      .subscribe((u: Usuario[] | undefined) => {
        if (u != undefined) {
          let usuario = u[0];
          if (this.loginUsuario.senha != usuario.senha) {
            M.toast({
              html: 'Oppsss! Por favor, verifique o email e a senha informados e tente novamente!',
            });
          } else {
            WebStorageUtil.set(Constantes.USERNAME_KEY, usuario);
            this.loginService.login();
          }
        }
      });
  }
}
