import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import {  HttpClientModule } from '@angular/common/http';
import { BusinessService } from "./services/business/business.service";
import { SettingsService } from './services/settings/settings.service';
import { BusinessPreviewComponent } from './starter/app-busines-preview/business-preview.component';
import { BusinessListComponent } from './starter/app-business-list-container/business-list.component';
import { BusinessDetailComponent } from './starter/business-detail/business-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    BusinessPreviewComponent,
    BusinessListComponent,
    BusinessDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [BusinessService,SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
