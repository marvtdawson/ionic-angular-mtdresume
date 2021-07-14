import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalMedicinePage } from './internal-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: InternalMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalMedicinePageRoutingModule {}
