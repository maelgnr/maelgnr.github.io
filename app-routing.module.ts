import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'CV',
    loadChildren: () => import('./modules/application/example-prism/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'Cursus',
    loadChildren: () => import('./modules/application/example-httpclient/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'Experience',
    loadChildren: () => import('./modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'Projet',
    loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }