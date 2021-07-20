import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [FooterComponent, HeaderComponent, JumbotronComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule
    ],
  exports: [FooterComponent, HeaderComponent, JumbotronComponent]
})
export class SharedComponentsModule { }
