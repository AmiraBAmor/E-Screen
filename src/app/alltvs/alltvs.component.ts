import { Component, ElementRef, HostListener, ViewChild  } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltvs',
  templateUrl: './alltvs.component.html',
  styleUrls: ['./alltvs.component.css']
})
export class AlltvsComponent {
  movies : any[]=[]
  page = 1; // Initial page number
  @ViewChild('scrollingContainer') scrollingContainer!: ElementRef;
  
  constructor(private router: Router,private tvService: MovieService){
    this.getTv()
  }
  
  getTv(){
    this.tvService.discoverTvShows(this.page).subscribe(
      (res)=>{
        console.log('resultass',res);
        this.movies.push(...res.results)
      },
      (err)=>{
        console.log(err);
    
      },
    )
    }

    onScroll() {
          this.page++;
          this.getTv();
    }

    filtersOpen :any='open'
 
  toggleFilters() {
    this.filtersOpen = this.filtersOpen=='open' ? 'close' :'open';
  }

  fetchMovies(): void {
    const defaultGenreId = 28;

    this.tvService.getMoviesByGenre(defaultGenreId).subscribe(
      (data: any) => {
        this.tvService.movies = data.results;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );

    this.tvService.getTvShowsByGenre(defaultGenreId).subscribe(
      (data: any) => {
        this.tvService.movies = data.results;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  onMovieClick(movieId: number): void {
    // Navigate to the movie details component with the movie ID
    this.router.navigate(['/app/moviedetails', movieId]);
  }
}