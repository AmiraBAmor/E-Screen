import { Component} from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-newsticker',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.css'],
 
})
export class NewstickerComponent {
  newsItems = [
    { type: 'new'},
  ]
    nowPlayingMovies: any[] = [];
 
  constructor(private movieService: MovieService) {}
 
  ngOnInit() {
    this.movieService.getNowPlayingMovies().subscribe((data: any) => {
      this.nowPlayingMovies = data.results;
    });
  }
}
