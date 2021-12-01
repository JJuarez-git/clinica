import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EspecialidadesComponent } from './components/pages/especialidades/especialidades.component';
import { EquipoComponent } from './components/pages/equipo/equipo.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio',  pathMatch: 'full'},
  /* {path: '**', redirectTo: 404, pathMatch: 'full'}, */
  {path: 'inicio', component: HomeComponent, pathMatch: 'full'},
  {path: 'especialidades', component: EspecialidadesComponent, pathMatch: 'full'},
  {path: 'equipo', component: EquipoComponent, pathMatch: 'full'},
  {path: 'contacto', component: ContactComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
