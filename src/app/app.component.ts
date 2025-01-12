import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ion-app>
      <router-outlet></router-outlet>
    </ion-app>
  `,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
})
export class AppComponent {}
