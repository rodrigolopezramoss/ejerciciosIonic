import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ejercicio01',
    loadChildren: () => import('./pages/ejercicio01/ejercicio01.module').then( m => m.Ejercicio01PageModule)
  },
  {
    path: 'ejercicio02',
    loadChildren: () => import('./pages/ejercicio02/ejercicio02.module').then( m => m.Ejercicio02PageModule)
  },
  {
    path: 'ejercicio03',
    loadChildren: () => import('./pages/ejercicio03/ejercicio03.module').then( m => m.Ejercicio03PageModule)
  },
  {
    path: 'ejercicio04',
    loadChildren: () => import('./pages/ejercicio04/ejercicio04.module').then( m => m.Ejercicio04PageModule)
  },
  {
    path: 'ejercicio05',
    loadChildren: () => import('./pages/ejercicio05/ejercicio05.module').then( m => m.Ejercicio05PageModule)
  },
  {
    path: 'ejercicio06',
    loadChildren: () => import('./pages/ejercicio06/ejercicio06.module').then( m => m.Ejercicio06PageModule)
  },
  {
    path: 'ejercicio07',
    loadChildren: () => import('./pages/ejercicio07/ejercicio07.module').then( m => m.Ejercicio07PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
