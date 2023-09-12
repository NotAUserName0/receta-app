import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { HomeComponent } from './views/home/home.component';
import { InsertComponent } from './views/insert/insert.component';
import { CardComponent } from './components/card/card.component';
import {AppModule} from "../../app.module";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    HomeComponent,
    InsertComponent,
    CardComponent
  ],
    imports: [
        CommonModule,
        GeneralRoutingModule,
        IonicModule,
    ]
})
export class GeneralModule { }
