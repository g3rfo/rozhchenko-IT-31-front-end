import { Routes } from '@angular/router';
import { CardList } from './components/card-list/card-list';
import { NotFoundMessage } from './components/not-found-message/not-found-message';
import { CardDetails } from './components/card-details/card-details';
import { AddDishForm } from './components/add-dish-form/add-dish-form';
import { AddDishPage } from './components/layout/pages/add-dish-page/add-dish-page';
import { DishesPage } from './components/layout/pages/dishes-page/dishes-page';

export const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishesPage },
  { path: 'dishes/:id', component: CardDetails },
  { path: 'add-dish', component: AddDishPage },
  { path: 'not-found-render', component: NotFoundMessage, outlet: 'dishes'}
];
