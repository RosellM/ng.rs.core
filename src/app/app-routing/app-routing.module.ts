import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BusinessDetailComponent } from '../starter/app-business-detail/business-detail.component';
import { BusinessListComponent } from '../starter/app-business-list-container/business-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'minegocio', pathMatch: 'full' },
      { 
        path: 'minegocio',
        component: StarterComponent,
        children :
        [
          { path: '', component: BusinessListComponent },
          { path: 'all', component: StarterComponent },
          { path: 'new', component: StarterComponent },
          { path: 'detail/:name/:id', component: BusinessDetailComponent }
        ]  
      },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
