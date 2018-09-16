import { Injectable } from '@angular/core';

import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas: Tarea[];

  constructor() {
     this.tareas =[]
    //   {titulo: 'Leer', descripcion:'Tengo quer leer', oculto: true},
    //   {titulo: 'ver tele', descripcion:'Tengo quer ver tele', oculto: true}
     
   }

   eliminarTarea(tarea: Tarea){
    for(let i=0; i < this.tareas.length ; i++){
      if(tarea == this.tareas[i]){
        this.tareas.splice(i,1);
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
       }
    }
   }

   obtenerTareas(){
     if( localStorage.getItem('tareas') === null ){
            return this.tareas;
    }  else {
      this.tareas = JSON.parse(localStorage.getItem('tareas'));
      return this.tareas;
    }
     
  }

   agregarTarea(tarea: Tarea){
     this.tareas.push(tarea) ;    
     let tareas: Tarea[] =  [];

     if(localStorage.getItem('tareas') === null){
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
     } else {
       tareas = JSON.parse(localStorage.getItem('tareas'));
       tareas.push(tarea);
       localStorage.setItem('tareas', JSON.stringify(tareas));
     }
    
     
   }
 }