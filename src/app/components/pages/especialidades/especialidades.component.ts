import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import info from 'src/app/mocks/info';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  title = `Especialidades | ${info.title}`

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

}
