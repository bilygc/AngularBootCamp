import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleCRoutingModule } from './module-c-routing.module';
import { AngularMaterialModuleModule } from '../angular-material-module/angular-material-module.module';
import { RouterModule } from '@angular/router';
import { ComponentCComponent } from './componenC/component-c/component-c.component';


@NgModule({
  declarations: [ComponentCComponent],
  imports: [
    CommonModule,
    ModuleCRoutingModule,
    AngularMaterialModuleModule,
    RouterModule
  ]
})
export class ModuleCModule { }
