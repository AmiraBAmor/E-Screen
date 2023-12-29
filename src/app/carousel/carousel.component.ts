import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: any[] = new Array(2).fill({id: -1, src: ''});
  showOverlay = true;
  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../assets/img/grp (2).jpg',
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/img/img2.jpg',
     }
  }
}