import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { BusinessService } from "./services/business/business.service";
import { SettingsService } from './services/settings/settings.service';
import { BusinessPreviewComponent } from './starter/app-busines-preview/business-preview.component';
import { BusinessListComponent } from './starter/app-business-list-container/business-list.component';
import { BusinessDetailComponent } from './starter/app-business-detail/business-detail.component';
import { DataSharedService } from './services/shared/data-shared.service';



@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    BusinessPreviewComponent,
    BusinessListComponent,
    BusinessDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [BusinessService,SettingsService,DataSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
