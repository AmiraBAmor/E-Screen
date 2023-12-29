import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  credits : any
  heartColor: string = 'red';
  eyeColor: string = 'black';
  starColor: string = '#ffb320';
  favorite = false;
  isinwatch = false;
  constructor(protected movieService: MovieService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  getSafeVideoUrl(): SafeResourceUrl {
    const videoUrl = 'https://www.youtube.com/embed/' + this.movieService.movieDetails.video;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit(): void {
    // Subscribe to route parameter to get the movie ID from the URL
    this.route.params.subscribe((params) => {
      this.movieService.movieId = +params['id']; // Convert the parameter to a number

      // Fetch movie details using the movie ID
      this.movieService.getMovieDetails(params['id']).subscribe((data) => {
        this.movieService.movieDetails = data;
        console.log(data);

        this.movieService.getMovieVideos(params['id']).subscribe((videosData: any) => {
          if (videosData.results && videosData.results.length > 0) {
            this.movieService.movieDetails.video = videosData.results[0].key;
          }
        });
        this.movieService.getMovieCredits(this.movieService.movieId).subscribe((credits) => {
          console.log('Movie Credits:', credits);
          this.credits = credits;
          console.log();
          
        });
      });
      const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
      const accountId = accountInfo.id || '';
   
      if (!accountId) {
        // Handle the case where accountId is not available
        console.error('Account ID not found in session storage.');
          }
         console.log(accountId);
   
      this.movieService.getFavoriteMovies().subscribe((movies: any) => {
       
        for (let movie of  movies.results) {
          if (movie.id == params['id'])
          this.favorite=true
         
        }
      });

      this.movieService.getwatchList(accountId).subscribe((movies: any) => {
       
        for (let movie of  movies.results) {
          if (movie.id == params['id'])
          this.isinwatch=true
         
        }
      });
    });
  }


  addToFavorites(movieId: number,isFav:any) {
    // Retrieve accountId from session storage
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || ''; // Assuming 'id' is the key for accountId
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
     this.movieService.addToFavorites(movieId, accountId,isFav).subscribe((res: any) => {
      console.log(res);
      this.favorite = isFav;
     
    },(er: any) => {
      console.log(er);
     
    });
  }


  addwachlist(movieId: number,isin:any) {
    // Retrieve accountId from session storage
    const accountInfo = JSON.parse(sessionStorage.getItem('account') || '{}');
    const accountId = accountInfo.id || ''; // Assuming 'id' is the key for accountId
 
    if (!accountId) {
      // Handle the case where accountId is not available
      console.error('Account ID not found in session storage.');
        }
       console.log(accountId);
 
     this.movieService.addToWach(movieId, accountId,isin).subscribe((res: any) => {
      console.log(res);
      this.isinwatch = isin;
     
    },(er: any) => {
      console.log(er);
     
    });
  }
}

