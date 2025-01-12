import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
})
export class HomePage {
  searchTerm: string = '';

  constructor(private router: Router) {}

  goToSettings() {
    this.router.navigateByUrl('/settings');
  }

  searchCountries() {
    if (this.searchTerm.trim()) {
      this.router.navigateByUrl(`/countries/${this.searchTerm}`);
    }
  }
}
