import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Film {
  id: number;
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  imports: [CommonModule],
  templateUrl: './liste.html',
  styleUrl: './liste.scss',
})
export class Liste {
  films: Film[] = [
    {
      id: 1,
      titre: 'Inception',
      affiche:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    },
    {
      id: 2,
      titre: 'The Matrix',
      affiche:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 3,
      titre: 'Interstellar',
      affiche:
        'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      id: 4,
      titre: 'Pulp Fiction',
      affiche:
        'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      id: 5,
      titre: 'The Shawshank Redemption',
      affiche:
        'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    },
  ];

  filmSelectionne: Film | null = null;

  selectionnerFilm(film: Film): void {
    this.filmSelectionne = film;
  }
}
