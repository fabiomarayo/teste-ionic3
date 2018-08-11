import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService } from '../../service/maps';
import Delivery from '../../models/Delivery';

@Input()
@Component({
    selector: 'page-create',
    templateUrl: 'create.html'
})
export class PageCreate {
    newItem: any = {};

    constructor(public navCtrl: NavController, public mapService: MapService) {
    }

    ionViewWillEnter = () => {

    }

    save = () => {
        this.mapService.findByString(this.newItem.location_from);
    }
}