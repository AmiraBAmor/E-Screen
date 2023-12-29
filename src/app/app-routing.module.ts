import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { AlltvsComponent } from './alltvs/alltvs.component';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { KidsComponent } from './kids/kids.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path :'', component : CarouselComponent},
  {path :'home', component : CarouselComponent},
  {path : 'app/allmovies', component : AllmoviesComponent},
  {path : 'app/alltvs' , component : AlltvsComponent},
  {path : 'app/allactors' , component : AllActorsComponent},
  {path : 'app/kids' , component : KidsComponent},
  {path : 'app/moviedetails/:id' , component : DetailsComponent},
  {path : 'app/login' , component : LoginComponent},
  {path : 'app/favorites' , component : FavoriteComponent},
  {path : 'app/watchlist' , component : WatchlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
