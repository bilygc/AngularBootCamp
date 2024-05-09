import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    console.log(this.el.nativeElement.innerText);
    let innerText = this.el.nativeElement.innerText;
    innerText =  innerText.split(" ").map( (word: string) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
    this.el.nativeElement.innerText = innerText;
  }

}
