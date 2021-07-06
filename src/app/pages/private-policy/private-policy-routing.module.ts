import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivatePolicyPage } from './private-policy.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatePolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePolicyPageRoutingModule {}
