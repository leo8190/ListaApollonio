import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss']
})
export class ListaEstudiantesComponent {
  estudiantes: Estudiante[] = [
    {
      nombre: 'Alberto',
      apellido: 'Cortez',
      edad: 34,
      nivelDeIngles: 9
    },
    {
      nombre: 'Maria',
      apellido: 'Gracian',
      edad: 35,
      nivelDeIngles: 10
    },
    {
      nombre: 'Cesar',
      apellido: 'Caceres',
      edad: 20,
      nivelDeIngles: 7
    },
    {
      nombre: 'Carlos',
      apellido: 'Sulum',
      edad: 27,
      nivelDeIngles: 6
    }
  ];
}
