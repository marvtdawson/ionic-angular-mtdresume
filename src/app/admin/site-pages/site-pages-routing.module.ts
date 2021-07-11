import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitePagesPage } from './site-pages.page';

const routes: Routes = [
  {
    path: '',
    component: SitePagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitePagesPageRoutingModule {}
