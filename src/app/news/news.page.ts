import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
  ],
})
export class NewsPage {
  apiKey: string = 'pub_62895ae1c2f0e5e2399fbf978ac97dc0dfad9';
  countryCode: string = '';
  countryName: string = '';
  newsResults: any[] = [];
  noNewsFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.countryCode = this.route.snapshot.paramMap.get('cca2') || '';
    this.countryName = this.route.snapshot.paramMap.get('countryName') || '';
    this.getNews();
  }

  getNews() {
    // Convert code to lowercase for newsdata.io
    const url = `https://newsdata.io/api/1/latest?apikey=${this.apiKey}&country=${this.countryCode.toLowerCase()}`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data.results && data.results.length > 0) {
          this.newsResults = data.results;
          this.noNewsFound = false;
        } else {
          this.noNewsFound = true;
        }
      },
      error: (err) => {
        console.log('Error fetching news:', err);
        this.noNewsFound = true;
      },
    });
  }
}
