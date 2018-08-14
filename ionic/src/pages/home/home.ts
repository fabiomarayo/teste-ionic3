import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewOnMap } from '../view-on-map/view-on-map';
import { PageCreate } from '../create/create';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public deliveries: any;
  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  ionViewWillEnter = () => {
    this.http.get('http://192.168.1.13:8080/delivery').subscribe(res => {
      this.deliveries = res;
    })
  }

  open = (d) => {
    this.navCtrl.push(ViewOnMap, { item: d }, { animation: 'ios-transition' });
  }
  
  add = () => {
    this.navCtrl.push(PageCreate, {}, { animation: 'ios-transition' });
  }

}
