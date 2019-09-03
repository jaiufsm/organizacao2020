import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficosPage } from './graficos.page';
import { RouterModule } from '@angular/router';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: GraficosPage }]),
    Ng2GoogleChartsModule
  ],
  declarations: [GraficosPage]
})
export class GraficosPageModule {}
