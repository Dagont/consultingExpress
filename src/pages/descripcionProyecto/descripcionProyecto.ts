import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-descripcionProyecto',
  templateUrl: 'descripcionProyecto.html'
})

export class descripcionProyecto {

   item: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
      this.item = params.get('item');
      
  }


}