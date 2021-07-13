import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoriesPage} from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule),

      },
      {
        path: 'allergies',
        loadChildren: () => import('../categories/allergies/allergies.module').then(m => m.AllergiesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {
}
