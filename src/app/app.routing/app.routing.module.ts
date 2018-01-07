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
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'work', component: WorkComponent, data: { animation: 'work' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'blog' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
  { path: '**', component: PageNotFoundComponent, data: { animation: '**' } }
];

export const APP_ROUTING  = RouterModule.forRoot((APP_ROUTES), { enableTracing: false });

