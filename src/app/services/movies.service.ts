import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  API_ENDPOINT = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) {}

  save(movie: Movie) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + 'movies', movie, {
      headers: headers,
    });
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'movies');
  }
}
