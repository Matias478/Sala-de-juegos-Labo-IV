import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAP-nFKODB4-I5NgZJpvh2gITlWF6v_Zmc",
  authDomain: "labo-iv-7e677.firebaseapp.com",
  projectId: "labo-iv-7e677",
  storageBucket: "labo-iv-7e677.appspot.com",
  messagingSenderId: "528645318305",
  appId: "1:528645318305:web:44e8b3a0decfdff84a32e0"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom([provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ])
  ]
};
