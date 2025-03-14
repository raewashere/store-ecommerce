import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path   : 'about',
        component: AboutComponent
    },
    //Siempre al final para redirigir a la 404
    {
        path: '**',
        component: NotFoundComponent
    }
];
