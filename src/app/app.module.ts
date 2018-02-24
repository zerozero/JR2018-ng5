import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {MatButtonModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {APP_ROUTING} from './app.routing/app.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import {ProjectRoutingModule} from './project/project-routing.module';
import {ProjectService} from './project/ProjectService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    AboutComponent,
    BlogComponent,
    ProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ProjectRoutingModule,
    APP_ROUTING
  ],
  providers: [ ProjectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
