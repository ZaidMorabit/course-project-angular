import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  createItem(item: Ingredient){
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients); //convert list of ingredients into a series of ingredients
    this.ingredientsChanged.emit(this.getIngredients());
  }

}
