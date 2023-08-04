import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

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
  weatherData: any = {};

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather('Riga').subscribe(
      (data) => {
        this.weatherData.name = data.location.name;
        this.weatherData.country = data.location.country;
        this.weatherData.date = data.location.localtime;
        this.weatherData.temperature = data.current.temp_c;
        this.weatherData.conditionText = data.current.condition.text;
        this.weatherData.conditionIcon = data.current.condition.icon;
      },
      (error) => {
        console.error('Failed to fetch weather data:', error);
      }
    );
  }
}