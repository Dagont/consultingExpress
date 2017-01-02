import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { descripcionProyecto } from '../descripcionProyecto/descripcionProyecto';

@Component({
  selector: 'page-proyectosActivos',
  templateUrl: 'proyectosActivos.html'
})
export class proyectosActivos {
  items: any;
  categoria: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  cambiarCategoria(){

  }

  ngOnInit() {
    this.getPosts('pics', 10);
  }
  getDefaults() {
    this.categoria = 'matematicas';
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(res => {
      this.items = res.data.children;
    });
  }

  public verProyecto(item) {
    this.navCtrl.push(descripcionProyecto, {
      item: item
    });
  }

}