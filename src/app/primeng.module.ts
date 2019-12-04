import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { ButtonModule }             from 'primeng/button';
import { CalendarModule }           from 'primeng/calendar';
import { DropdownModule }           from 'primeng/dropdown';
import { InputTextModule }          from 'primeng/inputtext';
import { CheckboxModule }           from 'primeng/checkbox';
import { SpinnerModule }            from 'primeng/spinner';
import { TableModule }              from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    SpinnerModule,
    TableModule
  ],
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    SpinnerModule,
    TableModule
  ]
})
export class PrimengModule { }
