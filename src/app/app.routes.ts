import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'paso1',
        loadComponent: () =>
          import('./features/prospects/pages/paso1-form/paso1-form')
            .then(m => m.Paso1Form)
      },
      {
        path: 'paso2',
        loadComponent: () =>
          import('./features/prospects/pages/paso2-preview/paso2-preview')
            .then(m => m.Paso2Preview)
      },
      {
        path: 'paso3',
        loadComponent: () =>
          import('./features/prospects/pages/paso3-signature/paso3-signature')
            .then(m => m.Paso3Signature)
      },
      {
        path: 'paso4',
        loadComponent: () =>
          import('./features/prospects/pages/paso4-confirm/paso4-confirm')
            .then(m => m.Paso4Confirm)
      },
      {
        path: '',
        redirectTo: 'paso1',
        pathMatch: 'full'
      }
    ]
  }
];