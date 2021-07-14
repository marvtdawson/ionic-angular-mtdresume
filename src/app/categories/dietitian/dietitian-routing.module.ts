import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietitianPage } from './dietitian.page';

const routes: Routes = [
  {
    path: '',
    component: DietitianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietitianPageRoutingModule {}
