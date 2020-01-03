import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RedirectViewComponent } from './redirect-view/redirect-view.component';

const routes: Routes = [{
  path: '', 
  component: HomeComponent,
  pathMatch: 'full' 
},
{
  path: '**',
  component: RedirectViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
