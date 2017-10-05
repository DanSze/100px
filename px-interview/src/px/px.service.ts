import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import '../assets/500px.js';

var px = (window as any)._500px; //A bit of magic to work with elements added to window

//Wraps the Javascript SDK
@Injectable()
export class PxService {
    public currentUser = null;

    constructor() {
        px.init({
            sdk_key: environment.pxKey
        });
        //make sure current user is always up to date, especially for other subscribers.
        px.on('authorization_obtained', ()=> this.currentUser = this.getUser()); 
        px.on('logout', ()=> this.currentUser = null);
        px.getAuthorizationStatus();
    }

    getPhotos(feature: string, rpp: number, imageSizes: number[]): Promise<any[]> {
        return this.get('/photos', {
            feature: feature,
            rpp: rpp,
            image_size: imageSizes
        }).then(data => {
            return data.photos;
        });
    }

    getPhoto(id: number, imageSizes: number[], tags: number): Promise<any[]> {
        let params = {
            image_size: imageSizes
        };
        if (tags) params['tags'] = tags;
        return this.get(`/photos/${id}`, params).then(data => {
            return data.photo;
        });
    }

    vote(id: number, vote: number): Promise<any> {
        return this.post(`/photos/${id}/vote`, {
            vote: vote
        }).then( (data) => {
            return data.photo;
        });
    }

    deleteVote(id: number): Promise<any> {
        return this.delete(`/photos/${id}/vote`, {})
        .then( (data) => {
            return data.photo;
        });
    }

    getUser(): Promise<any> {
        return this.get('/users', {})
        .then( (data) => {
            return data.user;
        });
    }

    /**
     * Log the user in. Sets current user.
     */
    logIn(): void {
        px.login();
    }
    
    onLogIn(callback: () => void) {
        px.on('authorization_obtained', callback);
    }

    onLogOut(callback: () => void) {
        px.on('logout', callback);
    }

    /**
     * If the user is not logged in, log them. Then fetch their data.
     */
    conditionalLogIn(): void {
        px.ensureAuthorization();
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

    private post(url: string, params: any): Promise<any> {
        return new Promise( (resolve, reject) => {
            px.api(url, 'post', params, result => {
                if (result.success) {
                    resolve(result.data);
                } else {
                    reject(result.error_message);
                }
            });
        });
    }

    private delete(url: string, params: any): Promise<any> {
        return new Promise( (resolve, reject) => {
            px.api(url, 'delete', params, result => {
                if (result.success) {
                    resolve(result.data);
                } else {
                    reject(result.error_message);
                }
            });
        });
    }
}

