import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnesthesiologyPageRoutingModule } from './anesthesiology-routing.module';

import { AnesthesiologyPage } from './anesthesiology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnesthesiologyPageRoutingModule
  ],
  declarations: [AnesthesiologyPage]
})
export class AnesthesiologyPageModule {}
