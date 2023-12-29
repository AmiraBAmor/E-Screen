import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-cardsections',
  templateUrl: './cardsections.component.html',
  styleUrls: ['./cardsections.component.css']
})
export class CardsectionsComponent {
  movies:any
constructor(private movieService: MovieService){
  this.getMovies()
}


getMovies(){
this.movieService.discoverMovies().subscribe(
  (res)=>{
    console.log('resultas',res);
    this.movies=res.results.slice(0,4)
  },
  (err)=>{
    console.log(err);

  },
)
}
}