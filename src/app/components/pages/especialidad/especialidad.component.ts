import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialidad, getEspecialidadByTitle } from '../../../mocks/especialidades';

@Component({
   selector: 'app-especialidad',
   templateUrl: './especialidad.component.html',
   styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

   especialidad:Especialidad | undefined;
   parrafos:string[] | undefined = []

   constructor(private activatedRoute: ActivatedRoute) { }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
         this.especialidad = getEspecialidadByTitle(params['name'])
         this.parrafos = this.especialidad?.info.split('\n')
      })
   }

}
