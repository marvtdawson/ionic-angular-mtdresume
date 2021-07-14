import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmaceuticalPage } from './pharmaceutical.page';

const routes: Routes = [
  {
    path: '',
    component: PharmaceuticalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmaceuticalPageRoutingModule {}
