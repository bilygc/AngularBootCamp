import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentBchildComponent } from './component-bchild/component-bchild.component';
import { ModuleCModule } from './c/module-c.module';

const routes: Routes = [{
  path: 'compa',
  component: ComponentAComponent,
},{
  path:'compb',
  component: ComponentBComponent,
  children:[{
    path: ':id',
    component: ComponentBchildComponent,
  }]
},{
  path:'compc',
  loadChildren: ():Promise<typeof ModuleCModule> =>
    import('./c/module-c.module').then((m: any): typeof ModuleCModule => m.ModuleCModule )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
