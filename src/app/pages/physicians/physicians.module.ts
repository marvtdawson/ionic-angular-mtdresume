import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysiciansPageRoutingModule } from './physicians-routing.module';

import { PhysiciansPage } from './physicians.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PhysiciansPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [PhysiciansPage]
})
export class PhysiciansPageModule {}
