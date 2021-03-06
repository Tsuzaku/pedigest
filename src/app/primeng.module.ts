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
import { MenuModule }               from 'primeng/menu';
import { MenubarModule }            from 'primeng/menubar';


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
    TableModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    SpinnerModule,
    TableModule,
    MenuModule,
    MenubarModule
  ]
})
export class PrimengModule { }
