import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding("class.open") isOpen = false;

  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleDropDown(event: Event){
    //this.isOpen = !this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
