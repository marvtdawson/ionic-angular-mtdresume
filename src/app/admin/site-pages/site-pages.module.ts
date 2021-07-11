import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitePagesPageRoutingModule } from './site-pages-routing.module';

import { SitePagesPage } from './site-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitePagesPageRoutingModule
  ],
  declarations: [SitePagesPage]
})
export class SitePagesPageModule {}
