import React, { Component } from 'react';
import './App.css';

import MovieCard from './components/MovieCard';
//import NavBar from './components/NavBar';
import MovieDialog from './components/MovieDialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputAdorment from '@material-ui/core/InputAdornment';

/*const originalMovies = [
  { id: 1, title: 'Star Wars'},
  { id: 2, title: 'Star Trek'},
  { id: 3, title: 'Blade Runner'}
];*/

class App extends Component {
  //create array
  state = { movies: [], selectedMovie: null, searchText: '' };
  
  selectMovie = movie => this.setState({ selectedMovie: movie });
  clearMovie = () => this.setState({ selectedMovie: null });
  
  searchTextChanged = e => this.setState({searchText: e.target.value})
  search = async e => {
    e.preventDefault();

    const { searchText } = this.state;

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c3c3d9804bfd2cd73b221a6ad60d5b17&query=${searchText}`)
    const json  = await response.json();
    this.setState({ movies : json.results });
  }

  async componentDidMount(){
    //API
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c3c3d9804bfd2cd73b221a6ad60d5b17`)
    const json  = await response.json();
    this.setState({ movies : json.results });
  }
  render() {
    const {movies, selectedMovie, searchText} = this.state;

    return (
     <div className="App">
        <div> 
          <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Movies
                </Typography>
                <form onSubmit ={this.search}>
                  <input
                    type ="search"
                    value= {searchText}
                    onChange={this.searchTextChanged}
                    startAdornment = {
                        <InputAdorment>
                          <span role="img" arial-label="Search" />
                        </InputAdorment>
                    }
                  />
                </form>    
            </Toolbar>
          </AppBar>
        </div>
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
