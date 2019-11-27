import { Component, OnInit } from '@angular/core';
import { NovDataService } from '../services/novdata.service';
import { Observable, interval, SchedulerLike, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
    myObs: Observable<any>;
    isRunning:boolean = false;
    private unsubscribe: Subject<void>;
    displayData;
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
    this.unsubscribe = new Subject();
    this.myObs = interval(200);
    this.myObs.pipe(takeUntil(this.unsubscribe)).subscribe((res)=> {
        // console.log(res);
        this.isRunning = true;
        this.displayData = res;
    }, (err) => {
        console.log(err);
    }, () => {
        console.log("complete");
    });
    }

    stopClick() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // this.myObs = null;
        this.isRunning = false;
        console.log("Stop!");
    }
    
}