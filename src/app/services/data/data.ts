import { Injectable } from '@angular/core';
import { DishCard } from '../../shared/models/dish-card';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Data {
  private dishes: DishCard[] = [
    {
      id: 1,
      title: 'Classic Margherita Pizza',
      imgName: 'Card01.png',
      description: 'A traditional Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy thin crust.',
      cookingTime: 25,
      complexity: 'Easy',
      servingFor: 4,
      ingredients: ['Pizza Dough', 'Tomato Sause', 'Mozzarella', 'Fresh Basil'],
      recipe: `
        1.Preheat your oven to 250°C (480°F) with a pizza stone inside.
        2.Roll out the pizza dough into a thin circle.
        3.Spread a thin layer of tomato sauce evenly.
        4.Add slices of mozzarella and a few fresh basil leaves.
        5.Bake for 7-10 minutes until the crust is golden and cheese is bubbling.
        6.Drizzle with olive oil and serve hot.
      `
    },
    {
      id: 2,
      title: 'Creamy Pasta Carbonara',
      imgName: 'Card02.png',
      description: 'Rich and creamy Italian pasta with crispy pancetta, eggs, and parmesan cheese.',
      cookingTime: 20,
      complexity: 'Medium',
      servingFor: 2,
      ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Parmesan', 'Paper'],
      recipe: `
        1.Cook the spaghetti in salted water until al dente.
        2.In a pan, cook pancetta until crispy. Remove from heat.
        3.Whisk eggs, grated parmesan, and black pepper in a bowl.
        4.Drain pasta (reserve a little water), then toss with pancetta.
        5.Remove from heat and quickly mix in the egg mixture — use the residual heat to make a creamy sauce (don't scramble the eggs!).
        6.Add a splash of pasta water if needed, and serve immediately.
      `
    },
    {
      id: 3,
      title: 'Grilled Salmon with Lemon',
      imgName: 'Card03.png',
      description: 'Perfectly grilled salmon fillet with a zesty lemon butter sauce and fresh herbs.',
      cookingTime: 15,
      complexity: 'Easy',
      servingFor: 2,
      ingredients: ['Salmon Fillet', 'Lemon', 'Butter', 'Dill', 'Herbs'],
      recipe: `
        1.Preheat your grill or pan to medium heat.
        2.Season the salmon fillets with salt and pepper.
        3.Grill each side for 3-4 minutes, until flaky.
        4.In a small saucepan, melt butter with lemon juice, dill, and herbs.
        5.Pour the sauce over the grilled salmon and serve with steamed vegetables or rice.
      `
    },
    {
      id: 4,
      title: 'Chicken Tikka Masala',
      imgName: 'Card04.png',
      description: 'Tender chicken pieces in a creamy, spiced tomato sauce served with basmati rice.',
      cookingTime: 45,
      complexity: 'Medium',
      servingFor: 4,
      ingredients: ['Chicken', 'Yogurt', 'Tomatoes', 'Cream', 'Rise', 'Parsley'],
      recipe: `
        1.Marinate chicken in yogurt and spices (cumin, coriander, paprika) for at least 30 minutes.
        2.Grill or sauté the chicken until lightly charred.
        3.In a pan, cook chopped tomatoes with garlic, ginger, and spices.
        4.Add cream and the cooked chicken. Simmer for 10-15 minutes.
        5.Serve with basmati rice, garnished with fresh parsley.
      `
    },
    {
      id: 5,
      title: 'Chocolate Lava Cake',
      imgName: 'Card05.png',
      description: 'Decadent chocolate cake with a gooey molten center, served warm with vanilla ice cream.',
      cookingTime: 30,
      complexity: 'Hard',
      servingFor: 4,
      ingredients: ['Dark Chocolate', 'Ice Cream', 'Butter', 'Eggs', 'Sugar'],
      recipe: `
        1.Melt dark chocolate and butter together until smooth.
        2.Whisk in sugar and eggs until fluffy.
        3.Pour into greased ramekins, filling ¾ full.
        4.Bake at 200°C (400°F) for 10-12 minutes — the center should stay soft.
        5.Serve immediately with a scoop of vanilla ice cream.
      `
    },
    {
      id: 6,
      title: 'Fresh Garden Salad',
      imgName: 'Card06.png',
      description: 'Crisp mixed greens with cherry tomatoes, cucumber, and a light vinaigrette dressing.',
      cookingTime: 10,
      complexity: 'Easy',
      servingFor: 2,
      ingredients: ['Mixed Greens', 'Tomatoes', 'Cucumbers', 'Avocado', 'Onion', 'Chickpeas', 'Olive Oil'],
      recipe: `
        1.Wash and dry mixed greens.
        2.Dice tomatoes, cucumbers, avocado, and thinly slice onion.
        3.Add chickpeas for protein.
        4.Whisk olive oil, lemon juice, salt, and pepper for dressing.
        5.Toss everything together and serve chilled.
      `
    }
  ];

  private itemsSubject = new BehaviorSubject<DishCard[]>(this.dishes);
  items$ = this.itemsSubject.asObservable();

  private searchText: string = '';
  private difficulty: string = 'All Difficulties';
  private cookTime: string = 'All Cook Times';

  constructor() {}

  getItems() : Observable<DishCard[]> {
    return of(this.dishes);
  }

  updateSearch(text: string) {
    this.searchText = text.toLowerCase().trim();
    this.applyFilters();
  }

  updateDifficulty(diff: string) {
    this.difficulty = diff;
    this.applyFilters();
  }

  updateCookTime(time: string) {
    this.cookTime = time;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.dishes.filter(item => {
      const matchesText =
        !this.searchText || item.title.toLowerCase().includes(this.searchText);

      const matchesDifficulty =
        this.difficulty === 'All Difficulties' ||
        item.complexity === this.difficulty;

      const matchesCookTime =
        this.cookTime === 'All Cook Times' ||
        (this.cookTime === 'Under 20 min' && item.cookingTime < 20) ||
        (this.cookTime === '20-40 min' && item.cookingTime >= 20 && item.cookingTime <= 40) ||
        (this.cookTime === 'Over 40 min' && item.cookingTime > 40);

      return matchesText && matchesDifficulty && matchesCookTime;
    });

    this.itemsSubject.next(filtered);
  }
}
