import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule, // needed for Http calls in this component
  ],
})
export class CountriesPage {
  searchTerm: string = '';
  countries: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm') || '';
    if (this.searchTerm) {
      this.getCountries();
    }
  }

  getCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchTerm}`;
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.countries = data || [];
      },
      error: (err) => {
        console.log('Error fetching countries:', err);
        this.countries = [];
      },
    });
  }

  showNews(country: any) {
    // e.g. 'US' for the cca2
    const cca2 = country.cca2;
    const officialName = country.name.official;
    this.router.navigateByUrl(`/news/${cca2}/${officialName}`);
  }

  showWeather(country: any) {
    const lat = country.latlng[0];
    const lng = country.latlng[1];
    const capital = country.capital?.[0] || '';
    this.router.navigateByUrl(`/weather/${capital}/${lat}/${lng}`);
  }
}
