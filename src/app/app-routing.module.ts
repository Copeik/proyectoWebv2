import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './Components/home/home.module#HomePageModule' },
  { path: 'tabsbar', loadChildren: './Components/tabsbar/tabsbar.module#TabsbarPageModule' },
  { path: 'inicio', loadChildren: './Components/inicio/inicio.module#InicioPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
