import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { descripcionSubasta } from '../descripcionSubasta/descripcionSubasta';

@Component({
    selector: 'page-consultarSubastas',
    templateUrl: 'consultarSubastas.html'
})

export class consultarSubastas {


    constructor(public navCtrl: NavController, public params: NavParams) {


    }

    public verProyecto() {
        this.navCtrl.push(descripcionSubasta, {
        });
    }


}