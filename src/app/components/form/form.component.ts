import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  movie: Movie = {
    name: '',
    year: 0,
    description: '',
    genre: '',
    duration: '',
  };
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  saveMovie() {
    this.moviesService.save(this.movie).subscribe(
      (data: any) => {
        alert('Pelicula guardada');
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert('Ocurrio un error');
      }
    );
  }
}
