import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import especialidades from '../../../mocks/especialidades';
import info from 'src/app/mocks/info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = info.title
  title = `Inicio | ${info.title}`

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

}
