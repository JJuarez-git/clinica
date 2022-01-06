import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { equipo } from 'src/app/mocks/equipo';
import info from 'src/app/mocks/info';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  title = `Equipo Médico | ${info.title}`
  data = equipo

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

}
