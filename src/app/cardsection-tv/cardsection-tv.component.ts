import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardsection-tv',
  templateUrl: './cardsection-tv.component.html',
  styleUrls: ['./cardsection-tv.component.css']
})
export class CardsectionTvComponent {
  movies : any
constructor(private tvService: MovieService , private router: Router){
  this.getTv()
}

getTv(){
  this.tvService.discoverTvShows().subscribe(
    (res)=>{
      console.log('resultass',res);
      this.movies=res.results.slice(0,4)
    },
    (err)=>{
      console.log(err);
  
    },
  )
  }

  redirectToAllTVs(): void {
    this.router.navigate(['/app/alltvs']);
  }
}
