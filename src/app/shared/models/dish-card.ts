export interface DishCard {
  title: string;
  imgUrl: string;
  description: string;
  cookingTime: number;
  complexity: 'easy' | 'medium' | 'hard';
  servingFor: number;
  ingredients: string[];
  recipe: string;
}
