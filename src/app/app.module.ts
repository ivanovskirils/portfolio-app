import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { TabsComponent } from './tabs/tabs.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    QrCodeComponent,
    TabsComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService], // Move WeatherService to the providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
