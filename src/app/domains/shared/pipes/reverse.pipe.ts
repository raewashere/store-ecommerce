import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    //Convierte string a array, lo invierte y lo vuelve a convertir en string
    return value.split('').reverse().join('');
  }

}
