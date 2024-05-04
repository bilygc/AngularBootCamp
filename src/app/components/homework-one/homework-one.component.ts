import { Component } from '@angular/core';

@Component({
  selector: 'app-homework-one',
  templateUrl: './homework-one.component.html',
  styleUrl: './homework-one.component.css'
})
export class HomeworkOneComponent {
  public active: boolean = false;
  public styleActive: boolean = false;  

  public setCurrentClasses(){
    this.active = !this.active;
  }

  public setCurrentStyles(){
    this.styleActive = !this.styleActive;    
  }
}
