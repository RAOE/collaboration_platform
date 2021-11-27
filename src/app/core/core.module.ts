import { NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  declarations: []
})


export class CoreModule {
  constructor(@SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error("模块已存在,不能再加载流!")
    }
  }



}
