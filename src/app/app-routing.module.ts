import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArventureComponent } from './aventureProj/arventure/arventure.component';
import { HistoireComponent } from './aventureProj/histoire/histoire.component';

const routes: Routes = [
  { path: '', redirectTo: '/histoire', pathMatch: 'full' },
  {path:"histoire", component:HistoireComponent},
  {path:"arventure", component:ArventureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
