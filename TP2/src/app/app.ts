import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Accueil, Liste],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('TP2');
}
