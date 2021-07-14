import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlternativeMedicinePageRoutingModule } from './alternative-medicine-routing.module';

import { AlternativeMedicinePage } from './alternative-medicine.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlternativeMedicinePageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [AlternativeMedicinePage]
})
export class AlternativeMedicinePageModule {}
