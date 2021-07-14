import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DermatologyPage } from './dermatology.page';

const routes: Routes = [
  {
    path: '',
    component: DermatologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DermatologyPageRoutingModule {}
