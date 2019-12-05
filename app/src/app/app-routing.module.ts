import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'lingu-logo',             loadChildren: './lingu-logo/lingu-logo.module#LinguLogoPageModule' },
  { path: 'login',                  loadChildren: './login/login.module#LoginPageModule' },
  { path: 'inicio',                 loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'session-code',           loadChildren: './session-code/session-code.module#SessionCodePageModule' },
  { path: 'level-placer',           loadChildren: './level-placer/level-placer.module#LevelPlacerPageModule' },
  { path: 'enroll',                 loadChildren: './enroll/enroll.module#EnrollPageModule' },
  { path: 'configuration',          loadChildren: './configuration/configuration.module#ConfigurationPageModule' },
  { path: 'about',                  loadChildren: './about/about.module#AboutPageModule' },
  { path: 'inner-level-placer',     loadChildren: './inner-level-placer/inner-level-placer.module#InnerLevelPlacerPageModule' },
  { path: 'ex-fonetic-transcript',  loadChildren: './ex-fonetic-transcript/ex-fonetic-transcript.module#ExFoneticTranscriptPageModule' },
  { path: 'fonetic', loadChildren: './fonetic/fonetic.module#FoneticPageModule' },
  { path: 'grafem', loadChildren: './grafem/grafem.module#GrafemPageModule' },
  { path: 'sil', loadChildren: './sil/sil.module#SilPageModule' },
  { path: 'let', loadChildren: './let/let.module#LetPageModule' },
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
