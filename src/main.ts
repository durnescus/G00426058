import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),              // Provide the routes
    importProvidersFrom(IonicModule.forRoot()), // Provide Ionic
  ],
}).catch(err => console.error(err));
