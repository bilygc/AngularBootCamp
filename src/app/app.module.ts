import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleAModule } from './module-a/module-a.module';
import { ComponentBComponent } from './components/component-b/component-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
