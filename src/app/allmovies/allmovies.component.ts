import {Component, ElementRef,ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent  {
  page = 1; // Initial page number
  @ViewChild('scrollingContainer') scrollingContainer!: ElementRef;
  
  constructor(private router: Router, protected movieService: MovieService){
    this.getMovies()
  }

  
  getMovies(){
  this.movieService.discoverMovies(this.page).subscribe(
    (res)=>{
      console.log('resultas',res);
      this.movieService.movies.push(...res.results)
    },
    (err)=>{
      console.log(err);
  
    },
  )
  }

  onScroll() {
    this.page++;
    this.getMovies();
  }
   
  filtersOpen :any='open'
 
  toggleFilters() {
    this.filtersOpen = this.filtersOpen=='open' ? 'close' :'open';
  }

  fetchMovies(): void {
    const defaultGenreId = 28;

    this.movieService.getMoviesByGenre(defaultGenreId).subscribe(
      (data: any) => {
        this.movieService.movies = data.results;
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