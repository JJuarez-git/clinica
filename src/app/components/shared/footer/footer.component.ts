import { Component } from '@angular/core';
import footerData from 'src/app/mocks/footer';
import info from '../../../mocks/info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

   title = info.title
   year = new Date().getFullYear();
   footer = footerData

  constructor() { }

}
