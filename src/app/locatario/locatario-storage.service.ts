import { Constantes } from './../util/constantes';
import { WebStorageUtil } from './../util/web-storage-util';
import { Locatario } from './../model/locatario';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LocatarioStorageService {
  locatarios!: Locatario[];
  private locatarioSource!: BehaviorSubject<number>;

  constructor() {
    this.locatarios = WebStorageUtil.get(Constantes.LOCATARIOS_KEY);
    this.locatarioSource = new BehaviorSubject<number>(this.locatarios?.length);
  }

  save(locatario: Locatario) {
    this.locatarios = WebStorageUtil.get(Constantes.LOCATARIOS_KEY);
    this.locatarios.push(locatario);
    WebStorageUtil.set(Constantes.LOCATARIOS_KEY, this.locatarios);
  }

  update(locatario: Locatario) {
    this.locatarios = WebStorageUtil.get(Constantes.LOCATARIOS_KEY);
    this.delete(locatario.id);
    this.save(locatario);
  }

  delete(id: number): boolean {
    this.locatarios = WebStorageUtil.get(Constantes.LOCATARIOS_KEY);

    this.locatarios = this.locatarios.filter((loc) => {
      return loc.id?.valueOf() != id?.valueOf();
    });

    WebStorageUtil.set(Constantes.LOCATARIOS_KEY, this.locatarios);
    return true;
  }

  isExist(cpf: string): boolean {
    this.locatarios = WebStorageUtil.get(Constantes.LOCATARIOS_KEY);
    for (let u of this.locatarios) {
      if (u.cpf?.valueOf() == cpf?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getLocatarios(): Locatario[] {
    this.locatarios = WebStorageUtil.get(Constantes.LOCATARIOS_KEY);
    return this.locatarios;
  }

  getById(id: number): Locatario | undefined {
    for (let loc of this.getLocatarios()) {
      if (loc.id == id) {
        return loc;
      }
    }
    return undefined;
  }

  notifyTotalUsers() {
    this.locatarioSource.next(this.getLocatarios()?.length);
  }

  asObservable(): Observable<number> {
    return this.locatarioSource;
  }
}
