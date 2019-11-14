import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
    selector: 'app-httppage',
    templateUrl: './httppage.component.html'
})

export class HttpPageComponent{
    ROOT_URL:string = 'https://localhost:44397/';
    obsrv : Observable<any>;
    constructor(private http: HttpClient){

    }

   
    makeCall() {
        console.log("making http call");
        let body = new HttpParams();
        // body.set('username', 'd@gmail.com');
        // body.set('password', 'DeryaDicle3d%');
        // body.set('grant_type', 'password');
        body = body.set('username', 'd@gmail.com').set('password', 'DeryaDicle3d%').set('grant_type', 'password');

        let headers = new HttpHeaders({
            'Content-Type' : 'application/x-www-form-urlencoded',
            // 'username' : 'd@gmail.com',
            // 'password' : 'DeryaDicle3d%',
            // 'grant_type' : 'password'
        });
        // headers.set('grant_type', 'password');
        
        // headers.set('Access-Control-Allow-Origin', '*');
        this.obsrv = this.http.post(this.ROOT_URL + 'Token', body, {headers});
        console.log(this.obsrv);
        this.obsrv.subscribe(
            data => {console.log(data);},
            error => console.log(error) 
        );
        
    }
}