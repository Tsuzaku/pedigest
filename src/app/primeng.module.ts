import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { ButtonModule }             from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    ButtonModule

  ]
})
export class PrimengModule { }
