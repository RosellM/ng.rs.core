import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export abstract class AHttpService {

    abstract list() : any;

    abstract create(business : any) : any;

    abstract update(business: any): any;

    abstract getById(id : string) : any;

    abstract delete( id : string) : any;

}