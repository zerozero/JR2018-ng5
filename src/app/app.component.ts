import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import {fadeAnimation} from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  navLinks = [
    {path: '/home', label: 'Home'},
    {path: '/about', label: 'About'},
    {path: '/work', label: 'Work'},
    {path: '/blog', label: 'Blog'},
    {path: '/contact', label: 'Contact'}
  ];

  constructor(private router: Router) {

  }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRouteData['animation'] : '';
  }
}
