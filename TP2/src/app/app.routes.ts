import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Contact } from './contact/contact';
import { Gestion } from './gestion/gestion';
import { Liste } from './liste/liste';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'contact', component: Contact },
  { path: 'gestion', component: Gestion },
  { path: 'liste', component: Liste },
  { path: '**', component: Accueil },
];
