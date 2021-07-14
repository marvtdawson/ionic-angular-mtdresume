import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnesthesiologyPage } from './anesthesiology.page';

const routes: Routes = [
  {
    path: '',
    component: AnesthesiologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnesthesiologyPageRoutingModule {}
