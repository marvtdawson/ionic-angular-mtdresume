import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OphthalmologyPage } from './ophthalmology.page';

const routes: Routes = [
  {
    path: '',
    component: OphthalmologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OphthalmologyPageRoutingModule {}
