import { Component, OnInit } from '@angular/core';
import { BusinessService } from "../../services/business/business.service";
import { BusinessSimpleDTO } from '../../models/business/businessSimpleDTO';
import { SettingsService } from '../../services/settings/settings.service';
import {  SettingsDTO } from '../../models/settings/settingsResponseDTO';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css']
})

export class StarterLeftSideComponent implements OnInit {
  
  title = 'app';
  profileInfoLabel:string;
  profileInfoUrl:string;

  myBusinessLabel:string;
  myBusinessUrl:string;

  optionsLeftSideComponentLabel: string;
  optionsLeftSideComponentUrl: string;

  createBusinessLabel : string;
  createBusinessUrl : string;


  listMyBusinessLabel:string;
  listMyBusinessUrl : string;

  settings : SettingsDTO;

  constructor( 
    private settingsService : SettingsService
    )
  {}

  ngOnInit(): void {
        this.loadComponentsResources();
  }



  private loadComponentsResources(){
    this.loadLabels();
  }
  /**
   * carga los recursos de un componente(ursl, labels, textos)
   */
        /**
      * Obtiene configuracione del componente
      */
    private loadLabels(){
    this.settingsService.componentName = this.constructor.name;
    this.settingsService.list().pipe().subscribe(
        resources=>
        {
          
            this.settings = resources.data[0];
            console.log(this.settings);
            this.profileInfoLabel = this.settings.Labels.find(label=>label.name =='profileInfoLabel').description;
            this.myBusinessLabel = this.settings.Labels.find(label=>label.name =='myBusinessLabel').description;
            this.optionsLeftSideComponentLabel =  this.settings.Labels.find(label=>label.name =='optionsLeftSideComponentLabel').description;
           
            this.createBusinessUrl = this.settings.Urls.find(url => url.name == 'createBusinessUrl').url;
            this.createBusinessLabel = this.settings.Labels.find(label => label.name == 'createBusinessLabel').description;

            this.listMyBusinessLabel = this.settings.Labels.find(label=>label.name =='listMyBusinessLabel').description;
            this.listMyBusinessUrl =  this.settings.Urls.find(url => url.name == 'listMyBusinessUrl').url;
        },
        error=>{
          console.log(error);
        }
      );
  }
}

