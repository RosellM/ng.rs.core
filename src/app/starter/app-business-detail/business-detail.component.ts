import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

import { BusinessService } from '../../services/business/business.service';
import { DataSharedService } from '../../services/shared/data-shared.service';
import { Config } from '../../settings/config';
import { SettingsService } from '../../services/settings/settings.service';
import { SettingsDTO } from '../../models/settings/settingsResponseDTO';
import { BusinessSimpleDTO } from '../../models/business/businessSimpleDTO';
@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

  private businessId: string;
  config: Config;
  settings: SettingsDTO;
  componentTitleLabel: string;
  businessForm : FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private settingsService: SettingsService,
    private dataSharedService: DataSharedService,
    private formBuider : FormBuilder
  ) {
    this.config = new Config();

    this.businessForm = this.formBuider.group({
      name: ['', Validators.required],
      description: ['',Validators.required]
    });

  }

  ngOnInit() {
    this.businessId = this.route.snapshot.paramMap.get('id');
    this.loadLabels();
    console.log(this.businessId);
    this.businessService.getById(this.businessId).subscribe(
      (business) => {
          this.updateValuesBusinessForm(business.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
    * Obtiene configuracione del componente
    */
  private loadLabels() {
    this.settingsService.componentName = this.constructor.name;
    this.settingsService.list().pipe().subscribe(
      resources => {
        this.settings = resources.data[0];
        this.componentTitleLabel = this.settings.Labels.find(label => label.name == 'componentTitleLabel').description;
        this.dataSharedService.changeMessage({ titleName: this.componentTitleLabel });
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * 
   * @param business Actualiza campos de formulario con informacion actual
   */
  private updateValuesBusinessForm(business : BusinessSimpleDTO)
  {
    this.businessForm.patchValue({
      name:  business.name,
      description : business.description
    });
  }
}
