import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import info from 'src/app/mocks/info';
import { especialidades } from '../../../mocks/especialidades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = info.title
  title = `Inicio | ${info.title}`
  espData = especialidades

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  goTop(): void {
    window.scrollTo(0,0)
  }

}
