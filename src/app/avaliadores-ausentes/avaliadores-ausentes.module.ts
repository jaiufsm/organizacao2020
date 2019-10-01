import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliadoresAusentesPage } from './avaliadores-ausentes.page';
import { AvaliadorAusenteModalPage } from '../avaliador-ausente-modal/avaliador-ausente-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliadoresAusentesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AvaliadoresAusentesPage, AvaliadorAusenteModalPage],
  entryComponents: [AvaliadorAusenteModalPage]
})
export class AvaliadoresAusentesPageModule {}
