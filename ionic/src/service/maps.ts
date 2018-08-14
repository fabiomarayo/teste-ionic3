import { Injectable } from '@angular/core';
@Injectable()
export class MapService {
    constructor() {

    }

    findByString = (string: String) => {
        return new Promise((resolve, reject) => {
            if(string.length == 0) {
                reject('Vazio');
            } else {
                resolve(string);
            }
        })
    }
}