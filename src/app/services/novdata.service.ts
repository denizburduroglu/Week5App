import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NovDataService {

    constructor(private xyz : HttpClient) {

    }
    getData() {
        return this.xyz.get('/assets/data.json');
    }
} 