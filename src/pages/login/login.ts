import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { presentacion } from '../presentacion/presentacion';
import { proyectosActivos } from '../proyectosActivos/proyectosActivos';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class login {
    rootPage: any = login;
    loader: any;
    usuario: any;
    contra: any;

    constructor(public navCtrl: NavController, public platform: Platform, public loadingCtrl: LoadingController, public storage: Storage, public toastCtrl: ToastController) {
       
        this.presentLoading();
        this.platform.ready().then(() => {
            this.storage.get('introShown').then((result) => {
                if (result) {
                    this.presentarToast('TutoHecho',3000);
                } else {
                    this.navCtrl.setRoot(presentacion);
                    this.storage.set('introShown', true);
                    this.presentarToast('TutoEjecutado',3000);
                }
                this.loader.dismiss();
            });
        });
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Inicializando..."
        });
        this.loader.present();
    }




    presentarToast(texto: string, duracion: any) {
        let toast = this.toastCtrl.create({
            message: texto,
            duration: duracion
        });
        toast.present();
    }

    verificarLogin() {
        if (this.usuario == 'Dag' && this.contra == '7188435') {
            this.presentarToast('Exito', 3000);
            this.navCtrl.setRoot(proyectosActivos);
        } else {
            this.presentarToast('Login incorrecto', 3000);
        }

    }

}
