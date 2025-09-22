import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../models/film';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.html',
  styleUrls: ['./liste.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Liste {
  public films: Film[] = [
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

  public filmSelectionne: Film | null = null;

  public selectionnerFilm(film: Film): void {
    this.filmSelectionne = film;
  }

  public trackByFilmId(index: number, film: Film): number {
    return film.id;
  }

  public onPosterError(ev: Event): void {
    const img = ev.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/300x450/cccccc/666666?text=Affiche+non+disponible';
  }
}
