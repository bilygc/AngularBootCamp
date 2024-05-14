import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeText'
})
export class CapitalizeTextPipe implements PipeTransform {

  transform(value: string): string {
    
    const capitalizeText = value.split(' ').map( (word) =>{
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');

    console.log(capitalizeText);

    return capitalizeText;
  }

}
