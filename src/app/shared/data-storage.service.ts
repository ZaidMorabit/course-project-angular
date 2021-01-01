import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){}
    private url= "https://project-course-angular-default-rtdb.firebaseio.com/reicpes.json";

    storeRecipes(){
        const recipes: Recipe[] = this.recipeService.getRecipes();
        this.http.put(this.url, recipes).subscribe(response =>{
            console.log(response);
        });
    }
    fetchRecipes(){
        return this.http
        .get<Recipe[]>(this.url)
        .pipe(
            map(recipes =>{
                return recipes.map(recipe =>{
                    // add a ingredients field to recipe objects for backend. Even if there is no ingredients 
                    return {
                        ...recipe, 
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                })
            }),
            tap(recipes =>{
                this.recipeService.setRecipes(recipes);
            })
        );
    }

}