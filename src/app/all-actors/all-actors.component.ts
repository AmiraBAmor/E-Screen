import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-all-actors',
  templateUrl: './all-actors.component.html',
  styleUrls: ['./all-actors.component.css']
})
export class AllActorsComponent {
  movies: any[]=[]
  page = 1; // Initial page number
  @ViewChild('scrollingContainer') scrollingContainer!: ElementRef;
  
  constructor(private actorService: MovieService ){
    this.getActor()
  }

  getActor(){
    this.actorService.getPopularPeople(this.page).subscribe(
      (res) => {
        console.log('resultas3',res);
        this.movies.push(...res.results)
      },
      (err)=>{
        console.log(err);
    
      }
      )
    }

   onScroll() {
      this.page++;
      this.getActor();
   }
}