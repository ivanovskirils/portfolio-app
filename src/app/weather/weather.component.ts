import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface WeatherData {
  date: string;
  temperature: number;
  // Add other properties if available in the API response
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() showWeather: boolean = false;
  weatherData: any;
  city: string = 'Riga'; // Default city is Riga
  sanitizedCity: SafeHtml = ''; // The sanitized city name

  constructor(private weatherService: WeatherService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Update the sanitizedCity when the component initializes
    this.updateSanitizedCity();
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = {
          name: data.location.name,
          country: data.location.country,
          date: data.current.last_updated,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          conditionIcon: 'https:' + data.current.condition.icon
        };

        // Update the sanitizedCity when weather data is fetched
        this.updateSanitizedCity();
      },
      (error) => {
        console.error('Failed to fetch weather data:', error);
      }
    );
  }

  updateSanitizedCity() {
    this.sanitizedCity = this.sanitizer.bypassSecurityTrustHtml(this.city);
  }
}
