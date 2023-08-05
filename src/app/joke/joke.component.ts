// joke.component.ts

import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  developerJoke: string = '';

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.getNewJoke();
  }

  async getNewJoke() {
    try {
      this.developerJoke = await this.jokeService.getRandomDeveloperJoke();
    } catch (error) {
      // Handle the error here
    }
  }
}
