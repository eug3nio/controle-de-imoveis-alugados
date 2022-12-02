import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Controle de Imóveis Alugados';
  isActive = true;
  isAdmin = true;
  coords: any;
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = position.coords;
    });
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
