import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerceiroMarketingPage } from './terceiro-marketing.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiroMarketingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerceiroMarketingPage]
})
export class TerceiroMarketingPageModule {}
