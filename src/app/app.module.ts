import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArventureComponent } from './aventureProj/arventure/arventure.component';
import { HistoireComponent } from './aventureProj/histoire/histoire.component';
import { GenererHistoireComponent } from './aventureProj/generer-histoire/generer-histoire.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    ArventureComponent,
    HistoireComponent,
    GenererHistoireComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
