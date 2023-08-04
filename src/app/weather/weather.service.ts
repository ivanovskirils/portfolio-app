import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiKey: string = environment.weatherApiKey;
  private readonly apiUrl: string = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=1`;
    return this.http.get<any>(url);
  }
}
