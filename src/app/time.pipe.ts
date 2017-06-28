import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})

export class TimePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return "00:00";
    if (typeof value !== "number") value = parseInt(value, 10);

    return this.two(Math.floor(value / 100) % 100) + 
           ":" + 
           this.two(value % 100); 
  }

  private two(nr): string {
    return  (nr < 10) ? "0"+nr : ""+nr;
  }
}