import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Baked salmon',
      'Served with lemon slices and cherry tomatoes',
      'https://www.allrecipes.com/thmb/pl6IzWa0p5VGZP-8ZsF4wfpEIwk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8000900-2000-d41f8a550fe5444894bf4a9e4d84fd1c.jpg',
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Cherry tomatoes', 10)]),
    new Recipe(
      'Cheeseburger',
      'Served with fries and joy',
      'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //returns a new array which is an exact copy of the one in this file, so we can't access the array itself
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
