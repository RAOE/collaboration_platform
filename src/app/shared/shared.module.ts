import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  exports: [
    CommonModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class SharedModule { }
