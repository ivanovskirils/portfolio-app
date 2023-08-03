import { Component, ViewChild } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showWeather: boolean = false;

  // Use ViewChild to get a reference to the WeatherComponent
  @ViewChild(WeatherComponent, { static: true }) weatherComponent!: WeatherComponent;

  // Call the toggleWeather() method of WeatherComponent
  toggleWeather() {
    this.weatherComponent.toggleWeather();
  }
}
