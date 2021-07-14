import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmaceuticalPageRoutingModule } from './pharmaceutical-routing.module';

import { PharmaceuticalPage } from './pharmaceutical.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PharmaceuticalPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [PharmaceuticalPage]
})
export class PharmaceuticalPageModule {}
