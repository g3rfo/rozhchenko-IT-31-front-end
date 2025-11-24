export interface DishCard {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  cookingTime: number;
  complexity: 'Easy' | 'Medium' | 'Hard';
  servingFor: number;
  ingredients: string[];
  recipe: string;
}
