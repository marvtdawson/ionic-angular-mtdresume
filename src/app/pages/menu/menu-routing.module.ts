import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../../pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('../../pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../../pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('../../pages/subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../../pages/blog/blog.module').then( m => m.BlogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
