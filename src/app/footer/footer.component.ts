import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 
  constructor(protected movieService: MovieService, private router:Router){
  }

  canShow(){
    const currentUrl = this.router.url;
    const moviedetailsRegex = /^\/app\/moviedetails\/.*/;
    return currentUrl !== "/app/kids" && currentUrl !== "/app/login" && !moviedetailsRegex.test(currentUrl);
  }

}
