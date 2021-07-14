import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigestivePageRoutingModule } from './digestive-routing.module';

import { DigestivePage } from './digestive.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DigestivePageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [DigestivePage]
})
export class DigestivePageModule {}
