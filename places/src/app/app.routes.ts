import { Routes } from '@angular/router';
import { TabsPage } from './tab/tab.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },

  {
    path: 'offers',
    loadComponent: () =>
      import('./offers/offers.page').then((m) => m.OffersPage),
  },
  {
    path: 'tab',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadComponent: () =>
          import('./places/places.page').then((m) => m.PlacesPage),
      },
      {
        path: 'offers',
        loadComponent: () =>
          import('./offers/offers.page').then((m) => m.OffersPage),
      },
    ],
  },
  {
    path: 'places',
    redirectTo: '/tab/places',
    pathMatch: 'full',
  },
  {
    path: 'tab',
    loadComponent: () => import('./tab/tab.page').then((m) => m.TabsPage),
  },
];