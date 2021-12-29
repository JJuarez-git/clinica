import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getEspecialidadByTitle } from '../../../mocks/especialidades';

interface Especialidad {
   title: string,
   info: string
}

@Component({
   selector: 'app-especialidad',
   templateUrl: './especialidad.component.html',
   styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

   especialidad:Especialidad | undefined;

   constructor(private activatedRoute: ActivatedRoute) { }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
         const obj = getEspecialidadByTitle(params['name'])
         this.especialidad = obj
      })
   }

}
