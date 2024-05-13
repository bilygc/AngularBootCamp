import { Component } from '@angular/core';
import { ServiceAService } from '../../services/service-a.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css'
})
export class ComponentAComponent {
  constructor(private readonly serviceAService: ServiceAService ){}

  public nums: string[] = this.serviceAService.numbers;
}
