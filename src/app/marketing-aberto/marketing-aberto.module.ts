import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarketingAbertoPage } from './marketing-aberto.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingAbertoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarketingAbertoPage]
})
export class MarketingAbertoPageModule {}
