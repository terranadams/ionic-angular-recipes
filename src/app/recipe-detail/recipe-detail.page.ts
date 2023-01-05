import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.loadedRecipe = {}
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // paramMap is the object we can retrieve our URL param from
      if (!paramMap.has('recipeId')) {
        // redirect
        return; // using this return cancels the rest of the function
      }
      const recipeId = paramMap.get('recipeId'); // obtaining our param value
      // console.log(recipeId)
      this.loadedRecipe = this.recipesService.getRecipe(recipeId)
      console.log(this.loadedRecipe)
    });
  }
}
