import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { RedditService } from './services/reddit.service'
import { subirProyecto } from '../pages/subirProyecto/subirProyecto';
import { proyectosActivos } from '../pages/proyectosActivos/proyectosActivos';
import { descripcionSubasta } from '../pages/descripcionSubasta/descripcionSubasta';
import { consultarSubastas } from '../pages/consultarSubastas/consultarSubastas';
import { login } from '../pages/login/login';
import { presentacion } from '../pages/presentacion/presentacion';

@Component({
  templateUrl: 'app.html',
  providers: [RedditService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = login;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Subir Proyecto', component: subirProyecto },
      { title: 'Proyectos Activos', component: proyectosActivos },
      { title: 'Mis subastas', component: consultarSubastas },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

