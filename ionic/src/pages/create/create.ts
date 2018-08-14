import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MapService } from '../../service/maps';

@Input()
@Component({
    selector: 'page-create',
    templateUrl: 'create.html'
})
export class PageCreate {
    newItem: any = { to_name: '', delivery_date: '', location_from: '',  location_to: ''};

    constructor(
        public navCtrl: NavController, 
        public mapService: MapService, 
        private http: HttpClient,
        private alert: AlertController
    ) {
    }
    save() {
        this.http.post<any>('http://192.168.1.13:3000/deliveries', this.newItem )
        .catch((err: Response ) => {
            alert('Ocorreu um erro: ' + err.statusText);
            return Observable.throw(err.statusText);
        })
        .subscribe(res => { 
            this.alert.create({
                title: 'Cadastro de Entrega',
                subTitle: 'Efetuado com sucesso!',
                buttons: [{ text: 'OK', role: 'cancel', handler: () => { this.navCtrl.pop() }}]
            }).present();
        } );
    }
}