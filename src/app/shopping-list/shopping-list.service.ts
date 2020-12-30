import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(index: number){
    return this.ingredients[index];
  }

  createItem(item: Ingredient){
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients); //convert list of ingredients into a series of ingredients
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index]= newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
