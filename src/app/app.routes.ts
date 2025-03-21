import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        //Vamos a cargar el componente de manera dinámica por chunks
        //component: ListComponent,
        loadComponent: () => import('@products/pages/list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'about',
        //component: AboutComponent,
        loadComponent: () => import('@info/pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'product/:id',
        //component: ProductDetailComponent,
        loadComponent: () => import('@products/pages/product-detail/product-detail.component').then((m) => m.ProductDetailComponent),
      },
    ],
  },

  //Siempre al final para redirigir a la 404
  {
    path: '**',
    //component: NotFoundComponent,
    loadComponent: () => import('@info/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
