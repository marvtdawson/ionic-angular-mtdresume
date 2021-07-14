import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyMedicinePage } from './family-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyMedicinePageRoutingModule {}
