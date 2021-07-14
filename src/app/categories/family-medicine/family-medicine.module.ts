import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyMedicinePageRoutingModule } from './family-medicine-routing.module';

import { FamilyMedicinePage } from './family-medicine.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FamilyMedicinePageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [FamilyMedicinePage]
})
export class FamilyMedicinePageModule {}
