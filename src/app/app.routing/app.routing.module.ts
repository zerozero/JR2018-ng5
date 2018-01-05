import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AppComponent} from '../app.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AboutComponent} from '../about/about.component';
import {WorkComponent} from '../work/work.component';
import {BlogComponent} from '../blog/blog.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTING  = RouterModule.forRoot((APP_ROUTES), { enableTracing: false });

