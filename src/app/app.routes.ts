import { Routes } from '@angular/router';
import { CardList } from './components/card-list/card-list';
import { NotFoundMessage } from './components/not-found-message/not-found-message';
import { CardDetails } from './components/card-details/card-details';

export const routes: Routes = [
  { path: 'items', component: CardList },
  { path: 'items/:id', component: CardDetails },

  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'not-found-render', component: NotFoundMessage}
];
