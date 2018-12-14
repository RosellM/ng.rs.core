import { Component, OnInit, Input } from '@angular/core';
import { ContactDTO } from '../../models/contact/contact';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './app-contact-preview.component.html',
  styleUrls: ['./app-contact-preview.component.css']
})
export class AppContactPreviewComponent implements OnInit {
  @Input() contact: ContactDTO;
  constructor() { }

  ngOnInit() {
  }

}
