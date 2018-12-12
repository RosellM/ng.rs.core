import { Injectable, Inject, Optional } from '@angular/core';
import { AHttpService } from '../../interfaces/http/AHttpService';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { SettingsResponseDTO } from '../../models/settings/settingsResponseDTO';
import {Config} from '../../settings/config';



@Injectable()
export class SettingsService  implements AHttpService {

  config : Config;
  url : string;
  public componentName: string;
  constructor(private http: HttpClient) 
  {
    this.config = new Config();
  }

  list() : Observable<SettingsResponseDTO>{
    this.url = `${this.config.base_url}/settings/list?component=${this.componentName}`;
    let headers = new HttpHeaders();
    headers =  headers.set( 'Authorization', this.config.token).set('Content-Type','application/json');
    return this.http.get<SettingsResponseDTO>( this.url, { headers : headers} );
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  getById() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
