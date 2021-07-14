import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnesthesiologyPageRoutingModule } from './anesthesiology-routing.module';

import { AnesthesiologyPage } from './anesthesiology.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnesthesiologyPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [AnesthesiologyPage]
})
export class AnesthesiologyPageModule {}
