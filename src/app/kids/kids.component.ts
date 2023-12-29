import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  page = 1; // Initial page number
  slides: any[] =[]
  @ViewChild('scrollingContainer') scrollingContainer!: ElementRef;
  
  constructor(protected movieService: MovieService){

  }

  getMovies(){
    this.movieService.getAnimationMovies(this.page).subscribe(
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

    ngOnInit(): void {
      this.slides[0] = {
        id: 0,
        subtitle: 'Welcome',
        subtitle2: 'Littles',
        subtitle3 : 'Stars'
      }
    }
}
