// joke.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private readonly apiUrl = 'https://icanhazdadjoke.com/';

  constructor() {}

  async getRandomDeveloperJoke(): Promise<string> {
    const headers = { Accept: 'text/plain' };

    try {
      const response = await axios.get(this.apiUrl, { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching joke:', error);
      throw error;
    }
  }
}
