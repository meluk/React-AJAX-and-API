import React, { Component } from 'react';
import './App.css';

import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import MovieDialog from './components/MovieDialog'

/*const originalMovies = [
  { id: 1, title: 'Star Wars'},
  { id: 2, title: 'Star Trek'},
  { id: 3, title: 'Blade Runner'}
];*/

class App extends Component {
  //create array
  state = { movies: [], selectedMovie: null };
  
  selectMovie = movie => this.setState({ selectedMovie: movie });
  clearMovie = () => this.setState({ selectedMovie: null });

  async componentDidMount(){
    //setTimeout(() => this.setState({ movies: originalMovies }), 5000);
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c3c3d9804bfd2cd73b221a6ad60d5b17`)
    const json  = await response.json();
    this.setState({ movies : json.results });
  }
  render() {
    const {movies, selectedMovie} = this.state;

    return (
     <div className="App">
         <NavBar />
        <div className="movies">
          {movies.map(movie => (
           <MovieCard 
             key={movie.id} 
             movie={movie} 
             selectMovie={this.selectMovie }
            />
          ))}  
        </div>
        {/* --Remoev  this. */}
        <MovieDialog movie={selectedMovie} handleClose={this.clearMovie}/>
      </div>
    );
  }
}

export default App;
