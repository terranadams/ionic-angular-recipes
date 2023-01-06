import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Pasta',
      imageUrl:
        'https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2020/04/IMG_9525-2.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  getAllRecipes() {
    return [...this.recipes]; // this returns a copy of the private array
  }

  getRecipe(recipeId: any) {
    return {...this.recipes.find((recipe) => recipe.id === recipeId)} // same deal as above
  }

  deleteRecipe(recipeId: any) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId)
  }

  constructor() {}
}
