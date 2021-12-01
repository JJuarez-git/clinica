import { Component, OnInit } from '@angular/core';
import slide from 'src/app/animations/slide';
import { environment } from '../../../../environments/environment';

const nav_links = [
  {
    title: 'Inicio',
    link: 'inicio'
  }, 
  {
    title: 'Especialidades',
    link: 'especialidades'
  },
  {
    title: 'Equipo Médico',
    link: 'equipo'
  },
  {
    title: 'Contacto',
    link: 'contacto'
  }]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [slide]
})
export class NavbarComponent implements OnInit {

  title = environment.title
  links = nav_links
  open = false

  constructor() { }

  ngOnInit(): void { }

  get stateName() {
    return this.open ? 'in' : 'out'
  }
  openNav() {
    this.open = true
  }

  closeNav() {
    this.open = false
    window.scrollTo(0,0)
  }

}
