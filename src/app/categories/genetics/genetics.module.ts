import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneticsPageRoutingModule } from './genetics-routing.module';

import { GeneticsPage } from './genetics.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GeneticsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [GeneticsPage]
})
export class GeneticsPageModule {}
