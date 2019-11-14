import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-testpage',
    templateUrl: './testpage.component.html'
})

export class TestPageComponent implements OnInit, OnChanges, OnDestroy {
    

    @Input() count = 0;

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        console.log(changes);
        // throw new Error("Method not implemented.");
    }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        console.log("ngOnInit");
    }

    ngOnDestroy(): void {
        //throw new Error("Method not implemented.");
        console.log("ngDestroy");
    }


}