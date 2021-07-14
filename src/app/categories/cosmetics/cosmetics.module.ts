import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CosmeticsPageRoutingModule } from './cosmetics-routing.module';

import { CosmeticsPage } from './cosmetics.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CosmeticsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [CosmeticsPage]
})
export class CosmeticsPageModule {}
