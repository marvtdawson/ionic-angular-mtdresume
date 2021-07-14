import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlternativeMedicinePage } from './alternative-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: AlternativeMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlternativeMedicinePageRoutingModule {}
