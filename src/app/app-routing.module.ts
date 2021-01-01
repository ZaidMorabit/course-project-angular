import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoRecipeSelectedComponent } from "./recipes/recipe-detail/no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
    {path:'', redirectTo:'/recipes', pathMatch: 'full'},
    {path:'recipes' , component: RecipesComponent,resolve:[RecipesResolverService], children:[
        {path:'', component: NoRecipeSelectedComponent, pathMatch: 'full'},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent, resolve:[RecipesResolverService]},
        {path:':id/edit', component: RecipeEditComponent, resolve:[RecipesResolverService]}
    ]},
    {path:'shopping-list' , component: ShoppingListComponent},
  ]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}