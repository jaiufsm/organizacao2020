import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliadorPage } from './avaliador.page';
import { AvaliadorModalPageModule } from '../avaliador-modal/avaliador-modal.module';

const routes: Routes = [
  {
    path: '',
    component: AvaliadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvaliadorPage]
})
export class AvaliadorPageModule {}
