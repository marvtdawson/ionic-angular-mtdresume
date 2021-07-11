import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'patients',
        loadChildren: () => import('./patients/patients.module').then( m => m.PatientsPageModule)
      },
      {
        path: 'physicians',
        loadChildren: () => import('./physicians/physicians.module').then( m => m.PhysiciansPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
      },
      {
        path: 'site-pages',
        loadChildren: () => import('./site-pages/site-pages.module').then( m => m.SitePagesPageModule)
      },
      {
        path: 'site-layout',
        loadChildren: () => import('./site-layout/site-layout.module').then( m => m.SiteLayoutPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
