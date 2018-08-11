import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService } from '../../service/maps';

@Input()
@Component({
    selector: 'page-create',
    templateUrl: 'create.html'
})
export class PageCreate {
    newItem: any = { to_name: '1', delivery_date: '2', location_from: '3',  location_to: '4'};

    constructor(public navCtrl: NavController, public mapService: MapService) {
    }

    ionViewWillEnter() {

    }

    save() {
        console.log('a');
        this.mapService.findByString(this.newItem.location_from)
        .then( res => {
            alert('tratou: ' + res);
        }).catch( err => alert(err));
    }
}