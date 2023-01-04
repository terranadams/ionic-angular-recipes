import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Pasta',
      imageUrl: 'https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2020/04/IMG_9525-2.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
