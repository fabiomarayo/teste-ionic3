import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewOnMap } from '../view-on-map/view-on-map';
import { PageCreate } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public deliveries: any;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter = () => {
    console.log('entrou lista');
    this.deliveries = [
      { id: 1, name: 'aaaa' },
      { id: 2, name: 'bbbb' },
    ];
  }

  open = (d) => {
    this.navCtrl.push(ViewOnMap, { item: d }, { animation: 'ios-transition' });
  }
  
  add = () => {
    this.navCtrl.push(PageCreate, {}, { animation: 'ios-transition' });
  }

}
