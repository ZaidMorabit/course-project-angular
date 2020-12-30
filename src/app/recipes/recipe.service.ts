import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipesChanges = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe("Burger",'test description A',
    "http://www.blogangelio.ovh/wp-content/uploads/2017/08/the-ultimate-hamburger.jpg",
    [
      new Ingredient("Meat", 1),
      new Ingredient("Salad", 1),
      new Ingredient("Tomato", 1),
      new Ingredient("Bun", 1)
    ]),
    new Recipe("Pasta",'test description B',
    "https://thefoodellers.com/wp-content/uploads/2019/05/pasta-pomodoro.jpeg",
    [
      new Ingredient("Pasta", 1),
      new Ingredient("Cream", 1)
    ]),
    new Recipe("Chili con carne",'test description C',
    "https://assets.afcdn.com/recipe/20161116/23198_w600.jpg",
    [
      new Ingredient("Meat", 1)
    ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    //slice method for creating a copy of the array so consumer don't change the datas in the service
    return this.recipes.slice();
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanges.next(this.recipes.slice());
  }


}
