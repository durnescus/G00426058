import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
})
export class SettingsPage {
  selectedUnit: string = 'metric';

  constructor(private router: Router) {
    const storedUnit = localStorage.getItem('selectedUnit');
    if (storedUnit) {
      this.selectedUnit = storedUnit;
    }
  }

  saveSettings() {
    localStorage.setItem('selectedUnit', this.selectedUnit);
    
    this.router.navigateByUrl('/');
  }
}
