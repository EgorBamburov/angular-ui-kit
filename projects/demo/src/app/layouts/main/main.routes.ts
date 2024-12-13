import {Routes} from '@angular/router';

export const MainRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../pages/main/main.page').then((p) => p.MainPage)
  },
  {
    path: 'inputs',
    loadComponent: () => import('../../pages/inputs/inputs.page')
      .then((p) => p.InputsPage)
  },
  {
    path: 'toasts',
    loadComponent: () => import('../../pages/toasts/toasts.page')
      .then((p) => p.ToastsPage)
  }
]
