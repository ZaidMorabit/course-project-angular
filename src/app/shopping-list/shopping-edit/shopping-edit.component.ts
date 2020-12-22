import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") name: ElementRef;
  @ViewChild("amountInput") amount: ElementRef;
  @Output() itemCreated: EventEmitter<Ingredient> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    const item = new Ingredient(this.name.nativeElement.value,
      this.amount.nativeElement.value);
    this.itemCreated.emit(item);
  }
}