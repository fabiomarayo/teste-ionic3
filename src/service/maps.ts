import { Injectable } from '@angular/core';
@Injectable()
export class MapService {
    constructor() {

    }

    findByString = (string: String) => {
        alert(string);
    }
}