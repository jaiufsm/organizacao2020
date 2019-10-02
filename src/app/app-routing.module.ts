import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: '', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},
  // { path: '', loadChildren: './login/login.module#LoginPageModule' }
  { path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
