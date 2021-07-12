import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidPageRoutingModule } from './covid-routing.module';

import { CovidPage } from './covid.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CovidPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [CovidPage]
})
export class CovidPageModule {}
