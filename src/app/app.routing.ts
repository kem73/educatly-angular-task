import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/blog/blog.component').then(module => module.BlogPageComponent),
    title: 'Blog Page',
    data: { requiresAuth: false }, 
  },
];

