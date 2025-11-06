import { Component } from '@angular/core';
import { DishCard } from "../card/card";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {
  items: DishCard[] = [
    {
      title: 'Classic Margherita Pizza',
      imgUrl: '',
      description: 'A traditional Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy thin crust.',
      cookingTime: 25,
      complexity: 'Easy',
      servingFor: 4,
      ingredients: ['Pizza Dough', 'Tomato Sause', 'Mozzarella', 'Fresh Basil'],
      recipe: ''
    },
    {
      title: 'Creamy Pasta Carbonara',
      imgUrl: '',
      description: 'Rich and creamy Italian pasta with crispy pancetta, eggs, and parmesan cheese.',
      cookingTime: 20,
      complexity: 'Medium',
      servingFor: 2,
      ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Parmesan'],
      recipe: ''
    },
    {
      title: 'Grilled Salmon with Lemon',
      imgUrl: '',
      description: 'Perfectly grilled salmon fillet with a zesty lemon butter sauce and fresh herbs.',
      cookingTime: 15,
      complexity: 'Easy',
      servingFor: 2,
      ingredients: ['Salmon Fillet', 'Lemon', 'Butter', 'Dill'],
      recipe: ''
    },
    {
      title: 'Chicken Tikka Masala',
      imgUrl: '',
      description: 'Tender chicken pieces in a creamy, spiced tomato sauce served with basmati rice.',
      cookingTime: 45,
      complexity: 'Medium',
      servingFor: 4,
      ingredients: ['Chicken', 'Yogurt', 'Tomatoes', 'Cream'],
      recipe: ''
    },
    {
      title: 'Chocolate Lava Cake',
      imgUrl: '',
      description: 'Decadent chocolate cake with a gooey molten center, served warm with vanilla ice cream.',
      cookingTime: 30,
      complexity: 'Hard',
      servingFor: 4,
      ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar'],
      recipe: ''
    },
    {
     title: 'Fresh Garden Salad',
      imgUrl: '',
      description: 'Crisp mixed greens with cherry tomatoes, cucumber, and a light vinaigrette dressing.',
      cookingTime: 10,
      complexity: 'Easy',
      servingFor: 2,
      ingredients: ['Mixed Greens', 'Tomatoes', 'Cucumbers', 'Olive Oil'],
      recipe: ''
    }
  ];
}
