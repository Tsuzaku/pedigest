import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myBool'
})
export class MyBoolPipe implements PipeTransform {

  transform(value: Boolean, ...args: any[]): any {
    if (value) return "yes";
    else return "";
  }

}
