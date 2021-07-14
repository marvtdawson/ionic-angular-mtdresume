import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternalMedicinePageRoutingModule } from './internal-medicine-routing.module';

import { InternalMedicinePage } from './internal-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternalMedicinePageRoutingModule
  ],
  declarations: [InternalMedicinePage]
})
export class InternalMedicinePageModule {}
