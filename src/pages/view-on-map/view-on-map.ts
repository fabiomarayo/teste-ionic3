import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-view',
    templateUrl: 'view-on-map.html'
})
export class ViewOnMap {
    public item: any;
    public loaded: boolean;
    constructor(public navCtrl: NavController, private navParams: NavParams) {
        this.loaded = false;
    }

    ionViewDidEnter = () => {
        this.item = this.navParams.get('item');
        this.loaded = true;
    }
} 