import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArventureComponent } from './aventureProj/arventure/arventure.component';
import { HistoireComponent } from './aventureProj/histoire/histoire.component';


@NgModule({
  declarations: [
    AppComponent,
    ArventureComponent,
    HistoireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
