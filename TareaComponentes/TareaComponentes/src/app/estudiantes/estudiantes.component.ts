import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  nombreEstudiante1 = "Douglas Castillo";
  cedulaEstudiante1 = 117190884;
  edadEstudiante1 = 23;

  nombreEstudiante2 = "Manuel Espinoza";
  cedulaEstudiante2 = 123456789;
  edadEstudiante2 = 21;

  nombreEstudiante3 = "Simon Sierra";
  cedulaEstudiante3 = 123456789;
  edadEstudiante3 = 24;

  

  constructor() { }

  ngOnInit(): void {
  }

}
