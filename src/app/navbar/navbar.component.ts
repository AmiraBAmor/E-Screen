import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(protected movieService: MovieService, private router:Router){
  }

  canShow(){
    const currentUrl = this.router.url;
    return currentUrl !== "/app/kids" && currentUrl !== "/app/login"
  }
}
