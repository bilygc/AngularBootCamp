import { NgModule, Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const AngularMaterialModules: Array<Type<unknown>> = [
  MatButtonModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  exports: [AngularMaterialModules],
  imports: [AngularMaterialModules]
})
export class AngularMaterialModule { }
