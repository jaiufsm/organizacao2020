import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'graficos',
        children: [
          {
            path: '',
            loadChildren: () => import('../graficos/graficos.module').then( m => m.GraficosPageModule)
          }
        ]
      },
      {
        path: 'avaliadoresAusentes',
        children: [
          {
            path: '',
            loadChildren: () => import('../avaliadores-ausentes/avaliadores-ausentes.module').then( m => m.AvaliadoresAusentesPageModule)
          }
        ]
      },
      {
        path: 'trabalhos',
        children: [
          {
            path: '',
            loadChildren: () => import('../trabalho/trabalho.module').then( m => m.TrabalhoPageModule)
          }
        ]
      },
      {
        path: 'avaliadores',
        children: [
          {
            path: '',
            loadChildren: () => import('../avaliador/avaliador.module').then( m => m.AvaliadorPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/graficos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/graficos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class TabsPageRoutingModule { }
