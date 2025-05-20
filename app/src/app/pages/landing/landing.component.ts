import { Component, OnInit } from '@angular/core';
import { BaseIceComponent } from '../../lib/BaseIceComponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent extends BaseIceComponent implements OnInit  {
services = [
    {
      name: 'Web Development',
      price: '$1000',
      description: 'Full-stack web development services.',
      picture: 'assets/images/web-dev.jpg'
    },
    {
      name: 'SEO Optimization',
      price: '$500',
      description: 'Improve your search rankings.',
      picture: 'assets/images/seo.jpg'
    }
  ];
content: any;

  constructor(private router: Router) {
super(router);
  }
}
