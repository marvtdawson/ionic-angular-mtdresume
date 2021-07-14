import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CosmeticsPageRoutingModule } from './cosmetics-routing.module';

import { CosmeticsPage } from './cosmetics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CosmeticsPageRoutingModule
  ],
  declarations: [CosmeticsPage]
})
export class CosmeticsPageModule {}
