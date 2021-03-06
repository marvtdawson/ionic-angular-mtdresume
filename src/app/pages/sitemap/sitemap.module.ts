import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitemapPageRoutingModule } from './sitemap-routing.module';

import { SitemapPage } from './sitemap.page';
import {SharedComponentsModule} from "../../components/shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SitemapPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [SitemapPage]
})
export class SitemapPageModule {}
