import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiKey: string = environment.weatherApiKey;
  private readonly apiUrl: string = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string) {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=5`; // Adjust days as needed
    return this.http.get(url);
  }
}
