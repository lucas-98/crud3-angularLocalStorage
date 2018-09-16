import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TareasFormComponent } from './components/tareas-form/tareas-form.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { ListaDeTareasComponent } from './components/lista-de-tareas/lista-de-tareas.component';
import { TareaService } from './service/tarea.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TareasFormComponent,
    TareaComponent,
    ListaDeTareasComponent,
    
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
