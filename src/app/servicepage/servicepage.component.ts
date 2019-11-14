import { Component, OnInit } from '@angular/core';
import { NovDataService } from '../services/novdata.service';
import { Observable, interval, SchedulerLike } from 'rxjs';

@Component({
    selector: 'app-servicepage',
    templateUrl: './servicepage.component.html',
    // providers: [NovDataService]
})

export class ServicePageComponent implements OnInit {
    
    constructor(private dataService: NovDataService) {

    }

    data;
    count;
    ngOnInit(): void {
        console.log(this.dataService.getData().subscribe((res)=> {
            console.log(res);
            this.data = res;
        }, (err) => {
            console.log(err.message);
        }, () => {
            console.log("Finished");
        }));
    }

    // myObservable = new Observable(function (observer) {
    //     observer.next(4);
    // });
    someClick() {
    let myObs = interval(200);

    myObs.subscribe((res)=> {
        console.log(res);
        if(res > 20) {
            
        }
    }, (err) => {
        console.log(err);
    }, () => {
        console.log("complete");
    });
    }
    
}