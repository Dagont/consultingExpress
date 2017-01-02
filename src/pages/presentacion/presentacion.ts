import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { login } from '../login/login';


@Component({
  selector: 'page-presentacion',
  templateUrl: 'presentacion.html'
})

export class presentacion {

    slides = [
    {
      title: "Bienvenido a Consulting Express!",
      description: "Esta plataforma te permitirá obtener soluciones para tus proyectos de manera fácil, rápida y económica",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Cómo comienzo?",
      description: "Lo único que tienes que hacer es subir tu proyecto junto con una corta descripcion y esperar a que lleguen las ofertas, en cualquier momento puedes tomar una oferta y finalizar la subasta",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Cómo pagar?",
      description: "Con una transacción en efecty o en cualquier banco, y listo!",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png",
    }
];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
      
  }

  irLogin(){
      this.navCtrl.setRoot(login);
  }


}


