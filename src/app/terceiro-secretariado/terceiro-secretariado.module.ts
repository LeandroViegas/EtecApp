import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerceiroSecretariadoPage } from './terceiro-secretariado.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiroSecretariadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerceiroSecretariadoPage]
})
export class TerceiroSecretariadoPageModule {}
