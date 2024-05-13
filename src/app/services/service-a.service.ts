import { Injectable } from '@angular/core';
import { ModuleAModule } from '../module-a/module-a.module';

@Injectable({
  providedIn: ModuleAModule
})
export class ServiceAService {

  constructor() { }
  public numbers = ["one", "two", "three"];
}
