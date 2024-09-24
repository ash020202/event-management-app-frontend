import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
// import { provideFirebaseApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAuTVEU-nXKlg8S7WODInnQkNreyKO0KMM',
//   authDomain: 'eventmanager-31c95.firebaseapp.com',
//   projectId: 'eventmanager-31c95',
//   storageBucket: 'eventmanager-31c95.appspot.com',
//   messagingSenderId: '195650234511',
//   appId: '1:195650234511:web:8472bc99d41a87696168fa',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // importProvidersFrom([
    //   provideFirebaseApp(() => initializeApp(firebaseConfig)),
    //   provideFirestore(() => getFirestore()),
    // ]),
  ],
};
