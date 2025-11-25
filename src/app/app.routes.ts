import { Routes } from '@angular/router';
import { NotFoundMessage } from './components/not-found-message/not-found-message';
import { CardDetails } from './components/card-details/card-details';
import { AddDishPage } from './components/layout/pages/add-dish-page/add-dish-page';
import { DishesPage } from './components/layout/pages/dishes-page/dishes-page';
import { RegAuthPage } from './components/layout/pages/reg-auth-page/reg-auth-page';
import { AuthForm } from './components/auth-form/auth-form';
import { RegForm } from './components/reg-form/reg-form';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishesPage },
  { path: 'dishes/:id', component: CardDetails },
  { path: 'add-dish', component: AddDishPage, canActivate: [authGuard] },
  {
    path: 'auth',
    component: RegAuthPage,
    children: [
      { path: '', component: AuthForm },
    ]
  },
  {
    path: 'reg',
    component: RegAuthPage,
    children: [
      { path: '', component: RegForm },
    ]
  },
  { path: '**', component: NotFoundMessage}
];
