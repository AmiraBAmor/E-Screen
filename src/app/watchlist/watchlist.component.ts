import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  list: any[] = [];
  accountId: any;
 
  constructor(private movieService: MovieService) {}
 
  ngOnInit() {
 
    this.watchlist();
  }
 
  watchlist() {
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || '';
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
    this.movieService.getwatchList(accountId).subscribe((movies: any) => {
     
      this.list = movies.results;
      console.log(movies);
    });
  }
}
