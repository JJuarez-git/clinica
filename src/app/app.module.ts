//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EspecialidadesComponent } from './components/pages/especialidades/especialidades.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EquipoComponent } from './components/pages/equipo/equipo.component';

//MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { EspecialidadComponent } from './components/pages/especialidad/especialidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    EspecialidadesComponent,
    FooterComponent,
    EquipoComponent,
    EspecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
