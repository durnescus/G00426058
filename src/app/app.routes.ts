import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SettingsPage } from './settings/settings.page';
import { CountriesPage } from './countries/countries.page';
import { NewsPage } from './news/news.page';
import { WeatherPage } from './weather/weather.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'settings',
    component: SettingsPage,
  },
  {
    path: 'countries/:searchTerm',
    component: CountriesPage,
  },
  {
    path: 'news/:cca2/:countryName',
    component: NewsPage,
  },
  {
    path: 'weather/:capital/:lat/:lng',
    component: WeatherPage,
  },
];

