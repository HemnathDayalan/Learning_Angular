import { Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
// import { AuthenNAuthorComponent } from './authen-n-author/authen-n-author.component';

export const routes: Routes = [
    {
        path: 'lazyloading', 
        // component: LazyLoadingComponent
        loadComponent: () => import('./lazy-loading/lazy-loading.component').then(c => c.LazyLoadingComponent)
    },
    {
        path: 'templateForms',
        component:TemplateformsComponent
    },
    // {
    //     path:'a&a',
    //     component:AuthenNAuthorComponent
    // }

];
