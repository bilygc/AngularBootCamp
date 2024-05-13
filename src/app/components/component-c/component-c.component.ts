import { Component } from '@angular/core';
import { ServiceBService } from '../../services/service-b.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrl: './component-c.component.css'
})
export class ComponentCComponent {
  public data: string;
  constructor(private readonly serviceBService: ServiceBService){
    this.data = this.serviceBService.persistentData;
  }
}
