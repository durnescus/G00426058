import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
  ],
})
export class WeatherPage {
  openWeatherApiKey: string = '55826afe395bf78361b0c886c4b93473';
  capital: string = '';
  lat: string = '';
  lng: string = '';
  unit: string = 'metric';  // default
  weatherData: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.capital = this.route.snapshot.paramMap.get('capital') || '';
    this.lat = this.route.snapshot.paramMap.get('lat') || '';
    this.lng = this.route.snapshot.paramMap.get('lng') || '';

    // Load unit from localStorage or default to 'metric'
    const storedUnit = localStorage.getItem('selectedUnit');
    if (storedUnit) {
      this.unit = storedUnit;
    }

    this.getWeather();
  }

  getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&units=${this.unit}&appid=${this.openWeatherApiKey}`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        console.log('Error fetching weather:', err);
      },
    });
  }
}
