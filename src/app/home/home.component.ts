import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(500)]), // Use a duration of your choice (milliseconds)
    ]),
  ],
})
export class HomeComponent {
  readBooks = [
    'Book Title 1',
    'Book Title 2',
    'Book Title 3',
    // Add more book titles as needed
  ];

  showReadBooks = false;

  toggleReadBooks() {
    this.showReadBooks = !this.showReadBooks;
  }
}
