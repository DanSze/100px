import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import '../assets/500px.js';

var px = (window as any)._500px; //A bit of magic to work with elements added to window

//Wraps the Javascript SDK
@Injectable()
export class PxService {

    constructor() {
        px.init({
            sdk_key: environment.pxKey
        });
    }

    getImages(feature: string, rpp: number): Promise<any[]> {
        return this.get('/photos', {
            feature: feature,
            rpp: rpp
        }).then(data => {
            return data.photos;
        });
    }

    private get(url: string, params: any): Promise<any> {
        return new Promise( (resolve, reject) => {
            px.api(url, params, result => {
                if (result.success) {
                    resolve(result.data);
                } else {
                    reject(result.error_message);
                }
            });
        });
    }
}

