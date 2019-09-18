import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliadorPage } from './avaliador.page';
import { AvaliadorModalPage } from '../avaliador-modal/avaliador-modal.page';

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
  declarations: [AvaliadorPage, AvaliadorModalPage],
  entryComponents: [AvaliadorModalPage]
})
export class AvaliadorPageModule {}
