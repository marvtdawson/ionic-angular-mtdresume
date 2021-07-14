import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentalPage } from './dental.page';

const routes: Routes = [
  {
    path: '',
    component: DentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentalPageRoutingModule {}
