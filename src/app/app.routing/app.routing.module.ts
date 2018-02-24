import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AboutComponent} from '../about/about.component';
import {BlogComponent} from '../blog/blog.component';
import {ProjectComponent} from '../project/project.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'project', component: ProjectComponent, data: { animation: 'project' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'blog' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
  { path: '**', component: PageNotFoundComponent, data: { animation: '**' } }
];

export const APP_ROUTING  = RouterModule.forRoot((APP_ROUTES), { enableTracing: true });

