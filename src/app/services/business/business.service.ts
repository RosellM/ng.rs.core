import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AHttpService } from '../../interfaces/http/AHttpService';
import { Observable } from 'rxjs/Observable';
import {BusinessSimpleDTO} from '../../models/business/businessSimpleDTO';
import {BusinessResponseDTO} from '../../models/business/businessResponseDTO';
import {Config} from '../../settings/config';
import { Injectable } from '@angular/core';

@Injectable()
export class BusinessService implements AHttpService {

  config : Config;
  url : string;
  constructor(public http : HttpClient)
  {
    this.config = new Config();
 
  }

  list() : Observable<BusinessResponseDTO> {
    this.url = `${this.config.base_url}/bussines/list?level=ALL`;
    let headers = new HttpHeaders();
    headers =  headers.set( 'Authorization', this.config.token).set('Content-Type','application/json');
    return this.http.get<BusinessResponseDTO>( this.url, { headers : headers} );
  }

  create(business : any) : Observable<BusinessSimpleDTO> {
    throw new Error("Method not implemented.");
  }
  update(business : any) : Observable<any> {
    throw new Error("Method not implemented.");
  }
  getById(id : string) : Observable<BusinessResponseDTO> {
    this.url = `${this.config.base_url}/bussines/detail/${id}/ALL`;
    let headers = new HttpHeaders();
    headers =  headers.set( 'Authorization', this.config.token).set('Content-Type','application/json');
    return this.http.get<BusinessResponseDTO>( this.url, { headers : headers} );
  
  }
  delete(id : string) : boolean {
    throw new Error("Method not implemented.");
  }

  
}
