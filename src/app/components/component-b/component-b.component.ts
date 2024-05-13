import { Component } from '@angular/core';
import { ServiceBService } from '../../services/service-b.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css'
})
export class ComponentBComponent {
  public data: string;
  constructor(private readonly serviceBService: ServiceBService){
    this.data = this.serviceBService.persistentData;
  }

}
