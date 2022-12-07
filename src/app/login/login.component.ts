import { Constantes } from './../util/constantes';
import { Usuario } from './../model/usuario';
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario!: Usuario;
  loginUsuario!: Usuario;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginUsuario = new Usuario('', '');
    this.usuario = WebStorageUtil.get(Constantes.USERNAME_KEY);
  }

  onLogin() {
    if (
      this.loginUsuario.email === this.usuario.email &&
      this.loginUsuario.senha === this.usuario.senha
    ) {
      this.loginService.login();
    } else {
      M.toast({
        html: 'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!',
      });
    }
  }
}
