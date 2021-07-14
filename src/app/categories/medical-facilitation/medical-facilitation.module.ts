import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalFacilitationPageRoutingModule } from './medical-facilitation-routing.module';

import { MedicalFacilitationPage } from './medical-facilitation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalFacilitationPageRoutingModule
  ],
  declarations: [MedicalFacilitationPage]
})
export class MedicalFacilitationPageModule {}
