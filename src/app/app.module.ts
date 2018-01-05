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
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
