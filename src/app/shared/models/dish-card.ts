export interface DishCard {
  title: string;
  imgName: string;
  description: string;
  cookingTime: number;
  complexity: 'Easy' | 'Medium' | 'Hard';
  servingFor: number;
  ingredients: string[];
  recipe: string;
}
