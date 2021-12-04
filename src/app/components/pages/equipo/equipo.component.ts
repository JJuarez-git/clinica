import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import info from 'src/app/mocks/info';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  title = `Equipo Médico | ${info.title}`

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

}
