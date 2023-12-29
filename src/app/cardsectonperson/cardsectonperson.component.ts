import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardsectonperson',
  templateUrl: './cardsectonperson.component.html',
  styleUrls: ['./cardsectonperson.component.css']
})
export class CardsectonpersonComponent {
  movies: any
  constructor(private actorService: MovieService, private router: Router){
    this.getActor()
  }

  getActor(){
    this.actorService.getPopularPeople().subscribe(
      (res) => {
        console.log('resultas3',res);
        this.movies = res.results.slice(0,4)
      },
      (err)=>{
        console.log(err);
    
      }
      )
    }

    redirectToAllActors(): void {
      this.router.navigate(['/app/allactors']);
    }
}
