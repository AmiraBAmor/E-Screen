import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  favoriteMovies: any[] = [];
  accountId: any;
 
  constructor(private movieService: MovieService) {}
 
  ngOnInit() {
 
    this.loadFavoriteMovies();
  }
 
  loadFavoriteMovies() {
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || '';
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
    this.movieService.getFavoriteMovies().subscribe((movies: any) => {
     
      this.favoriteMovies = movies.results;
      console.log(movies);
    });
  }
}
