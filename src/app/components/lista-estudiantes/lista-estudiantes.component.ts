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
      nota: 2.9,
      materia: 'Ingles'
    },
    {
      nombre: 'Maria',
      apellido: 'Gracian',
      edad: 35,
      nota: 10,
      materia: 'Ingles'
    },
    {
      nombre: 'Cesar',
      apellido: 'Caceres',
      edad: 20,
      nota: 7.9,
      materia: 'Lengua'
    },
    {
      nombre: 'Carlos',
      apellido: 'Sulum',
      edad: 27,
      nota: 3.4,
      materia: 'Lengua'
    },
    {
      nombre: 'Carla',
      apellido: 'Sandez',
      edad: 31,
      nota: 6.8,
      materia: 'Ingles'
    },
    {
      nombre: 'Patricia',
      apellido: 'Martinez',
      edad: 37,
      nota: 5.6,
      materia: 'Lengua'
    },
    {
      nombre: 'Marta',
      apellido: 'Sanchez',
      edad: 39,
      nota: 1.2,
      materia: 'Lengua'
    },
    {
      nombre: 'Saberio',
      apellido: 'Sinosins',
      edad: 44,
      nota: 7.4,
      materia: 'Lengua'
    }
  ];
}
