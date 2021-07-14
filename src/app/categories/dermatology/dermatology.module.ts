import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermatologyPageRoutingModule } from './dermatology-routing.module';

import { DermatologyPage } from './dermatology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermatologyPageRoutingModule
  ],
  declarations: [DermatologyPage]
})
export class DermatologyPageModule {}
