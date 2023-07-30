import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  // Method to check if the given route is the current active route
  isTabActive(route: string): boolean {
    return this.activatedRoute.snapshot.routeConfig?.path === route;
  }
}
