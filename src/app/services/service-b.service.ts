import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor() { }
  public persistentData = "I'm a variable inside a singleton";
}
