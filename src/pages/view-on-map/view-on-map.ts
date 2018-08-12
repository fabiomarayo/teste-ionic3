import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleMaps, GoogleMap, LatLng } from '@ionic-native/google-maps'

@Component({
    selector: 'page-view',
    templateUrl: 'view-on-map.html'
})
export class ViewOnMap {
    @ViewChild('map') private mapElement: ElementRef;
    public item: any;
    public loaded: boolean;
    private id: string;

    public map: GoogleMap;
    private location: LatLng;

    constructor(
        public navCtrl: NavController,
        private navParams: NavParams,
        private http: HttpClient,
        private alert: AlertController,
        private platform: Platform,
        private googleMaps: GoogleMaps
    ) {
        this.loaded = false;
        this.id = this.navParams.get('item').id;
        this.location = new LatLng(42.346903, -71.135101);
    }
    findDelivery(id: string) {
        return new Promise((resolve, reject) => {
            this.http.get(`http://127.0.0.1:3000/deliveries/${id}`)
            .catch((err: Response) => {
                reject(err.statusText);
                return Observable.throw(err);
            })
            .subscribe(res => resolve(res));
        })
    }
    ionViewDidLoad = () => {
        this.findDelivery( this.id ).then(res => { 
            this.item = res;
            this.map = GoogleMaps.create('map', {
                camera: { target: this.location },
                zoom: 8,
                tilt: 30
            });

        }).catch(err => { 
            this.alert.create({
                title: 'Entrega não localizada',
                buttons: [{ text: 'OK', role: 'cancel', handler: () => { this.navCtrl.pop(); } }]
            }).present();
        });
    }
} 