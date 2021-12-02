import { Component, OnInit } from '@angular/core';
import footerData from 'src/app/mocks/footer';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title = environment.title
  year = new Date().getFullYear();
  footer = footerData

  constructor() { }

  ngOnInit(): void {
  }

}
