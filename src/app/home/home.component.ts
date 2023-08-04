import { Component, ViewChild } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showWeather: boolean = true;

  @ViewChild(WeatherComponent, { static: true }) weatherComponent!: WeatherComponent;
}
