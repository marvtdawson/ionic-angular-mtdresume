import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermatologyPageRoutingModule } from './dermatology-routing.module';

import { DermatologyPage } from './dermatology.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DermatologyPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [DermatologyPage]
})
export class DermatologyPageModule {}
