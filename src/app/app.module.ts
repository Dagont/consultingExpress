import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { subirProyecto } from '../pages/subirProyecto/subirProyecto';
import { proyectosActivos } from '../pages/proyectosActivos/proyectosActivos';
import { descripcionProyecto } from '../pages/descripcionProyecto/descripcionProyecto';
import { descripcionSubasta } from '../pages/descripcionSubasta/descripcionSubasta';
import { consultarSubastas } from '../pages/consultarSubastas/consultarSubastas';
import { login } from '../pages/login/login';
import { presentacion } from '../pages/presentacion/presentacion';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    subirProyecto,
    descripcionProyecto,
    descripcionSubasta,
    consultarSubastas,
    login,
    presentacion,
    proyectosActivos

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    subirProyecto,
    descripcionProyecto,
    descripcionSubasta,
    consultarSubastas,
    presentacion,
    login,
    proyectosActivos
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule { }
