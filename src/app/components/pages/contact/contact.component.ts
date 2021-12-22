import { Component, OnInit } from '@angular/core';
import { Title,  } from '@angular/platform-browser';
import info from 'src/app/mocks/info';
import footerData from 'src/app/mocks/footer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = `Contacto | ${info.title}`
  data = footerData
  clinicaName = info.title

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

}
