import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-descripcionSubasta',
  templateUrl: 'descripcionSubasta.html'
})

export class descripcionSubasta {

    item: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
      this.item = params.get('item');
      
  }


}