import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent {
  selectedGenre: number = 0; // Default value
  selectedLanguage: string = '0';
  

  constructor(protected movieService: MovieService) {}

  onGenreChange(): void {
    console.log('resultaaas');
    
    if (this.selectedGenre !== 0) {
      this.movieService.getMoviesByGenre(this.selectedGenre).subscribe(
        (data) => {
          console.log(data); 
          this.movieService.movies=data.results
          // Display the data in the console or update the UI as needed
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );
    }
  }

  onLanguageChange(event: any): void {
    this.selectedLanguage = event.target.value;
    if (this.selectedLanguage !== '0') {
      this.getMovies(this.selectedLanguage);
    }
  }

  getMovies(language: string): void {
    this.movieService.getMoviesByLanguage(language).subscribe((data: any) => {
      this.movieService.movies = data.results;
    });
  }

  getMoviesDate(): void {
    this.movieService.getMoviesByDateRange(this.movieService.startDate, this.movieService.endDate)
      .subscribe(data => {
        if (data && data.results) {
          this.movieService.movies = data.results;
        } else {
          console.warn('Data or results property is null:', data);
        }
      });
  }
}