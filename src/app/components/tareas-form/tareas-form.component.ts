import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.css']
})
export class TareasFormComponent implements OnInit {

  constructor( public tareaService: TareaService ) {

   }

  ngOnInit() {

  }
  agregarTarea(newTitulo: HTMLInputElement, newDescripcion:HTMLInputElement){
    console.log('agregando', newTitulo.value , newDescripcion.value);
    this.tareaService.agregarTarea({
      titulo: newTitulo.value,
      descripcion: newDescripcion.value,
      oculto: true
    });

    newTitulo.value= '';
    newDescripcion.value ='';
    newTitulo.focus();

    return false;
  }
 
}
