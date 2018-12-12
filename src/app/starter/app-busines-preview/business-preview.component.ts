import { Component, OnInit, Input } from '@angular/core';
import { BusinessSimpleDTO } from '../../models/business/businessSimpleDTO';

@Component({
  selector: 'app-business-preview',
  templateUrl: './business-preview.component.html',
  styleUrls: ['./business-preview.component.css']
})
export class BusinessPreviewComponent implements OnInit {
  @Input() business: BusinessSimpleDTO;

  constructor() { }

  ngOnInit() {
    console.log(this.business);
  }

}
