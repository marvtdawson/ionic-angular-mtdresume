import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OphthalmologyPageRoutingModule } from './ophthalmology-routing.module';

import { OphthalmologyPage } from './ophthalmology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OphthalmologyPageRoutingModule
  ],
  declarations: [OphthalmologyPage]
})
export class OphthalmologyPageModule {}
