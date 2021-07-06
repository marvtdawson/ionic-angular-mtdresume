import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivatePolicyPageRoutingModule } from './private-policy-routing.module';

import { PrivatePolicyPage } from './private-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivatePolicyPageRoutingModule
  ],
  declarations: [PrivatePolicyPage]
})
export class PrivatePolicyPageModule {}
