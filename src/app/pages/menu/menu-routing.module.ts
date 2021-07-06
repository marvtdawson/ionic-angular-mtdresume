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
    path: 'tabs',
    loadChildren: () => import('../../tabs/tabs.module').then(m => m.TabsPageModule)
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
  },
  {
    path: 'mobile-app',
    loadChildren: () => import('../../pages/mobile-app/mobile-app.module').then( m => m.MobileAppPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('../../pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'private-policy',
    loadChildren: () => import('../../pages/private-policy/private-policy.module').then( m => m.PrivatePolicyPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('../../pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
