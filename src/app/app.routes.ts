import {Routes} from '@angular/router';
import {MainRoutes} from './layouts/main/main.routes';

export const AppRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main/main.layout')
      .then((l) => l.MainLayout),
    children: MainRoutes
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.page')
      .then((p) => p.NotFoundPage)
  }
]
