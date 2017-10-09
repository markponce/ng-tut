import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }
  
  @HostListener('blur') onBlur() {
    // console.log('on blur');
    let value: string = this.el.nativeElement.value;
    console.log(this.format);
    
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();

      // this.el.nativeElement.value = value.toUpperCase();
    

  }

}