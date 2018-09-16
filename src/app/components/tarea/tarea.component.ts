import { Component, OnInit, Input } from '@angular/core';

import { Tarea } from '../../models/tarea';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor( public tareaService : TareaService ) { }

  ngOnInit() {
  }

  eliminarTarea(tarea : Tarea){
    if(confirm('¿ Esta seguro de querer eliminar esta nota ?')){
      this.tareaService.eliminarTarea(tarea);

    }
  }

}
