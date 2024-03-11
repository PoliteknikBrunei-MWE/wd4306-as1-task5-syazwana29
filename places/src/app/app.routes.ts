import { Routes } from '@angular/router';
import { TabPage } from './tab/tab.page';

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
    path: 'place-detail',
    loadComponent: () =>
      import('./places/place-detail/place-detail.page').then(
        (m) => m.PlaceDetailPage
      ),
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./offers/offers.page').then((m) => m.OffersPage),
  },
  {
    path: 'tabs',
    component: TabPage,
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
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tab/tab.page').then((m) => m.TabPage),
  },
];