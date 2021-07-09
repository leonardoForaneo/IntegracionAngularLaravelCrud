import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api/';
  movies: Movie[] = [];
  constructor(
    private movieService: MoviesService,
    private httpClient: HttpClient
  ) {
    this.movieService.get().subscribe(
      (data: any) => {
        this.movies = data;
      },
      (error) => {
        console.log(error);
        alert('Ocurrio un error');
      }
    );
  }

  ngOnInit(): void {}
}
