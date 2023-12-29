import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermovie'
})
export class FiltermoviePipe implements PipeTransform {

  transform(movies: any[], startDate: string, endDate: string): any[] {
    if (!movies || !startDate || !endDate) {
      return movies;
    }

    const startTimestamp = new Date(startDate).getTime();
    const endTimestamp = new Date(endDate).getTime();

    return movies.filter(movie => {
      const releaseDateTimestamp = new Date(movie.release_date).getTime();
      return releaseDateTimestamp >= startTimestamp && releaseDateTimestamp <= endTimestamp;
    });
  }

  transformTV(tvShows: any[], startDate: string, endDate: string): any[] {
    if (!tvShows || !startDate || !endDate) {
      return tvShows;
    }
  
    const startTimestamp = new Date(startDate).getTime();
    const endTimestamp = new Date(endDate).getTime();
  
    return tvShows.filter(tvShow => {
      const firstAirDateTimestamp = new Date(tvShow.first_air_date).getTime();
      return firstAirDateTimestamp >= startTimestamp && firstAirDateTimestamp <= endTimestamp;
    });
  }
}
