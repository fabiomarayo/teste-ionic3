import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps'

@Component({
    selector: 'page-view',
    templateUrl: 'view-on-map.html'
})
export class ViewOnMap {
    public item: any;
    public loaded: boolean;
    private id: string;

    public map: GoogleMap;
    constructor(
        public navCtrl: NavController,
        private navParams: NavParams,
        private http: HttpClient,
        private alert: AlertController,
        private platform: Platform
    ) {
        this.loaded = false;
        this.id = this.navParams.get('item').id;
    }
    findDelivery(id: string) {
        return new Promise((resolve, reject) => {
            this.http.get(`http://192.168.1.13:3000/deliveries/${id}`)
            .catch((err: Response) => {
                reject(err.statusText);
                return Observable.throw(err);
            })
            .subscribe(res => resolve(res));
        })
    }

    loadMap() {
        this.map = GoogleMaps.create('map',  {
            camera: {
               target: {
                 lat: 43.0741904,
                 lng: -89.3809802
               },
               zoom: 18,
               tilt: 30
             }
          });
          this.map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
    }
    ionViewDidLoad = () => {
        this.findDelivery( this.id ).then(res => { 
            this.item = res;

            this.loadMap();

        }).catch(err => { 
            this.alert.create({
                title: 'Entrega não localizada',
                buttons: [{ text: 'OK', role: 'cancel', handler: () => { this.navCtrl.pop(); } }]
            }).present();
        });
    }
} 