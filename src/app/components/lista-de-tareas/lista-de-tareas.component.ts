import { Component, OnInit } from '@angular/core';

import { TareaService } from '../../service/tarea.service';
import { Tarea } from '../../models/tarea';



@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.css']
})
export class ListaDeTareasComponent implements OnInit {

  tareas : Tarea[];

  constructor(  public tareaService : TareaService) { }

  ngOnInit() {
    this.tareas = this.tareaService.obtenerTareas();
    console.log(this.tareas);
  }

}
