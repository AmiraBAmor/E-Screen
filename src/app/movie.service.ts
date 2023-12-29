// movie.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '8ec24eb1aecc66a9849824e0511d24a0'; // Replace with your actual API key
  movies:any[]=[];
  startDate: string = "";
  endDate: string = "";
  movieId = 0;
  movieDetails: any;

  constructor(private http: HttpClient) {}

 
  discoverMovies(page=1): Observable<any> {
    const url = `${this.apiUrl}/discover/movie`;
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('page', page);
    return this.http.get(url, { params });
  }

  discoverTvShows(page=1): Observable<any> {
    const url = `${this.apiUrl}/tv/popular`;
    const params = new HttpParams().set('api_key', this.apiKey)
    .set('api_key', this.apiKey)
    .set('page', page);
    return this.http.get(url, { params });
  }

  getPopularPeople(page=1): Observable<any> {
    const url = `${this.apiUrl}/person/popular`;
    const params = new HttpParams().set('api_key', this.apiKey)
    .set('api_key', this.apiKey)
    .set('page', page);
    return this.http.get(url, { params });
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    const params = {
      api_key: this.apiKey,
      with_genres: genreId.toString()
    };
    return this.http.get(url, { params });
  }

  getTvShowsByGenre(genreId: number): Observable<any> {
    const url = `${this.apiUrl}/discover/tv`;
    const params = new HttpParams().set('api_key', this.apiKey).set('with_genres', genreId.toString());

    return this.http.get(url, { params });
  }

  getAnimationMovies(page=1): Observable<any> {
    const animationGenreId = 16; // Assuming 16 is the genre code for Animation
    const url = `${this.apiUrl}/discover/movie`;
    const params = new HttpParams().set('api_key', this.apiKey)
    .set('with_genres', animationGenreId.toString());
    return this.http.get(url, { params });
  }

  getMoviesByLanguage(language: string): Observable<any> {
    const url = `${this.apiUrl}/discover/movie`;
    const params = {
      api_key: this.apiKey,
      language: language,
    };
    return this.http.get(url, { params });
  }

  getMoviesByDateRange(startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('primary_release_date.gte', startDate)
      .set('primary_release_date.lte', endDate);

    return this.http.get(this.apiUrl, { params });
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTvShowsByLanguage(language: string): Observable<any> {
    const url = `${this.apiUrl}/discover/tv`;
    const params = new HttpParams().set('api_key', this.apiKey).set('language', language);

    return this.http.get(url, { params });
  }

  getTvShowsByDateRange(startDate: string, endDate: string): Observable<any> {
    const url = `${this.apiUrl}/discover/tv`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('first_air_date.gte', startDate)
      .set('first_air_date.lte', endDate);

    return this.http.get(url, { params });
  }

  getTvShowDetails(tvShowId: number): Observable<any> {
    const url = `${this.apiUrl}/tv/${tvShowId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  
  getMovieVideos(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovieCredits(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }


 
 
  getNowPlayingMovies(): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getRequestToken(): Observable<any> {
    const url = `${this.apiUrl}/authentication/token/new?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
 
  // Step 2: Login with shared credentials using the request token
  loginSharedCredentials(requestToken: string,username:string,password:string): Observable<any> {
    const url = `${this.apiUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
    const body = {
      username : username,
      password:password,
      request_token: requestToken,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, body, { headers });
  }
 
  // Step 3: Create a new session with the validated request token
  createSession(requestToken: string): Observable<any> {
    const url = `${this.apiUrl}/authentication/session/new?api_key=${this.apiKey}`;
    const body = { request_token: requestToken };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, body, { headers });
  }
 
  getAccountDetails(sessionId: string): Observable<any> {
    const url = `${this.apiUrl}/account`;
    const params = {
      api_key: this.apiKey,
      session_id: sessionId,
    };
 
    return this.http.get(url, { params });
  }


  addToFavorites(movieId: number, accountId: string,isFav:any): Observable<any> {
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
   
    const params ={
    api_key: this.apiKey,
    session_id:  JSON.parse(sessionStorage.getItem('sessionData')! ).session_id
  }
    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: isFav,
    };
    return this.http.post(url, body, { params, headers });
  }

  getFavoriteMovies(): Observable<any> {
    const accountId =JSON.parse(sessionStorage.getItem('account')!).id
    const url = `${this.apiUrl}/account/${accountId}/favorite/movies`;
    const params = {
      api_key: this.apiKey,
      session_id: JSON.parse(sessionStorage.getItem('sessionData')!).session_id,
    };
 
    return this.http.get(url, { params });
  }

  addToWach(movieId: number, accountId: string,isin:any): Observable<any> {
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params ={
    api_key: this.apiKey,
    session_id:  JSON.parse(sessionStorage.getItem('sessionData')! ).session_id
  }
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: isin,
    };
    return this.http.post(url, body, { params, headers });
  }

  getwatchList(accountId: string): Observable<any> {
    const apiUrl = `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies`;
    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('session_id', JSON.parse(sessionStorage.getItem('sessionData')!).session_id);
   
    return this.http.get(apiUrl, { params });
  }
}
