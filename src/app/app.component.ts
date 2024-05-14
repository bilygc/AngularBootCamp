import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'AngularBootCamp';
  public cantidad: number = 34.22;
  public cadena: string = 'hello world';
}
