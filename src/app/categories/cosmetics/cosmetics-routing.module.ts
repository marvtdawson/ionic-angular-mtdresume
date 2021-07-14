import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CosmeticsPage } from './cosmetics.page';

const routes: Routes = [
  {
    path: '',
    component: CosmeticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosmeticsPageRoutingModule {}
