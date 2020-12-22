import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe",'test description A',
    "http://www.blogangelio.ovh/wp-content/uploads/2017/08/the-ultimate-hamburger.jpg"),
    new Recipe("B test recipe",'test description B',
    "http://www.blogangelio.ovh/wp-content/uploads/2017/08/the-ultimate-hamburger.jpg"),
    new Recipe("c test recipe",'test description C',
    "http://www.blogangelio.ovh/wp-content/uploads/2017/08/the-ultimate-hamburger.jpg"),
  ];
  //itemSelected: Recipe= this.recipes[0]; 
  @Output() itemSelected: EventEmitter<Recipe> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onItemSelected(itemSelected: Recipe){
    this.itemSelected.emit(itemSelected);
  }

}
