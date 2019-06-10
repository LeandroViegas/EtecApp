import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DSAbertoPage } from './dsaberto.page';

const routes: Routes = [
  {
    path: '',
    component: DSAbertoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DSAbertoPage]
})
export class DSAbertoPageModule {}
