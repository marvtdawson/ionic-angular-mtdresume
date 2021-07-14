import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyMedicinePageRoutingModule } from './emergency-medicine-routing.module';

import { EmergencyMedicinePage } from './emergency-medicine.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EmergencyMedicinePageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [EmergencyMedicinePage]
})
export class EmergencyMedicinePageModule {}
