import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-subirProyecto',
  templateUrl: 'subirProyecto.html'
})

export class subirProyecto {
  public cargado: boolean;
  public enviado: boolean;
  public myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController) {
    this.cargado=false;
    this.enviado=false;
  }

  public cargarArchivo(){
    if (this.cargado==true){
      this.cargado=false;
    }else{
      this.cargado=true;
    }
  }

  presentarToast(texto: string,duracion: any) {
    let toast = this.toastCtrl.create({
      message: texto,
      duration: duracion
    });
    toast.present();
  }

  public enviarProyecto(){
    this.enviado=true;
    this.presentarToast('Proyecto enviado!',3000);
  }

  public verProyecto(){
    this.presentarToast('Visualizando...',3000);
  }

}
