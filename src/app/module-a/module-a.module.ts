import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from '../components/component-a/component-a.component';
import { ComponentCComponent } from '../components/component-c/component-c.component';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentCComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ComponentAComponent, ComponentCComponent]
})
export class ModuleAModule { }
