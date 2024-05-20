import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const AngularMaterialModules: Array<Type<unknown>> = [
  MatButtonModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
]



@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModules
  ],
  exports:[AngularMaterialModules]
})
export class AngularMaterialModuleModule { }
