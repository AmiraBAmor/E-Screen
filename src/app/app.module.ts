import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselControlComponent, CarouselIndicatorsComponent, CarouselModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewstickerComponent } from './newsticker/newsticker.component';
import { CardsectionsComponent } from './cardsections/cardsections.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsectionTvComponent } from './cardsection-tv/cardsection-tv.component';
import { CardsectonpersonComponent } from './cardsectonperson/cardsectonperson.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { AlltvsComponent } from './alltvs/alltvs.component';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { FooterComponent } from './footer/footer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilteringComponent } from './filtering/filtering.component';
import { FormsModule } from '@angular/forms';
import { KidsComponent } from './kids/kids.component';
import { FiltermoviePipe } from './pipe/filtermovie.pipe';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { TrendingComponent } from './trending/trending.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    NewstickerComponent,
    CardsectionsComponent,
    CardsectionTvComponent,
    CardsectonpersonComponent,
    AllmoviesComponent,
    AlltvsComponent,
    AllActorsComponent,
    FooterComponent,
    FilteringComponent,
    KidsComponent,
    FiltermoviePipe,
    DetailsComponent,
    LoginComponent,
    FavoriteComponent,
    WatchlistComponent,
    TrendingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CarouselControlComponent,
    IconModule,
    CarouselIndicatorsComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    

  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
