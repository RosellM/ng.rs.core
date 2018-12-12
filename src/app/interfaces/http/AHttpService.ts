import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export abstract class AHttpService {

    abstract list() : any;

    abstract create() : any;

    abstract update(): any;

    abstract getById() : any;

    abstract delete() : any;

}