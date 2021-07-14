import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietitianPageRoutingModule } from './dietitian-routing.module';

import { DietitianPage } from './dietitian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietitianPageRoutingModule
  ],
  declarations: [DietitianPage]
})
export class DietitianPageModule {}
