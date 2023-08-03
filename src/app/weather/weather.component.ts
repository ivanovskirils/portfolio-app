import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather/weather.service'; // Import the WeatherService

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() showWeather: boolean = false;
  forecasts: any[] = [];

  constructor(private weatherService: WeatherService) {} // Inject the WeatherService

  toggleWeather() {
    this.showWeather = !this.showWeather;
    if (this.showWeather) {
      // Fetch weather data from the service when showWeather is true
      this.weatherService.getWeatherForecast('Riga').subscribe((data: any) => {
        this.forecasts = data.forecast.forecastday;
      });
    }
  }
}
