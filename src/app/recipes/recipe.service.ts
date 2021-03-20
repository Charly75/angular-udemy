import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe',
        'this is a test',
        'https://img118.imagetwist.com/th/28998/vnkch1my16wx.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 21),
        ]),
        new Recipe('A test recipe 2 ',
        'this is a test',
        'https://img5.hotnessrater.com/4698724/mary-kalisy-pussy.jpg',
        [
            new Ingredient('Buns', 1),
            new Ingredient('Meat', 2),
        ])
      ];

      constructor(private slService: ShoppingListService) {

      }
    // Only get a copy
      getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.slService.addIngredients(ingredients);
    }
}
