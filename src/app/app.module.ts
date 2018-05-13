import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActuatorService } from './actuator.service';

import { CardModule } from 'primeng/components/card/card';
import { PanelModule } from 'primeng/components/panel/panel';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ButtonModule } from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodsCardComponent } from './shared/cods-card/cods-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CodsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    PanelModule,
    ButtonModule,
    TabViewModule,
    BrowserAnimationsModule
  ],
  providers: [ActuatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
