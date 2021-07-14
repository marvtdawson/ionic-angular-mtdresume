import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalFacilitationPage } from './medical-facilitation.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalFacilitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalFacilitationPageRoutingModule {}
