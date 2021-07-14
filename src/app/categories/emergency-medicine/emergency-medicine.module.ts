import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyMedicinePageRoutingModule } from './emergency-medicine-routing.module';

import { EmergencyMedicinePage } from './emergency-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyMedicinePageRoutingModule
  ],
  declarations: [EmergencyMedicinePage]
})
export class EmergencyMedicinePageModule {}
