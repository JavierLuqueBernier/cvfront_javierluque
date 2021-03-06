import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ViewProjectComponent } from './components/view-project/view-project.component'

const routes: Routes = [
  {
    path: '', /* ruta inicial */
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'projects/:id', /* debe ser projects/:id porque queremos que lo que vaya despues de la barra sea variable y se consigue con ":" */
    component: ViewProjectComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
