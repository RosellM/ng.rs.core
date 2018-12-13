import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../../services/shared/data-shared.service';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {
  titleName : any;
  subTitleName : any
  constructor(private dataSharedService : DataSharedService) { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
    this.dataSharedService.currentMessage.subscribe( data => 
      {
      this.subTitleName = data.subTitle
      this.titleName = data.titleName
      console.log(data);
      }      
    );
  }

}
