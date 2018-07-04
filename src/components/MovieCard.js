import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class MovieCard extends React.Component {
    //function
    selectMovie = () => {
      //cost is generally a safer way to declare variables
      const {movie, selectMovie} = this.props;
      selectMovie(movie);
    }
    render(){  
        const {movie} = this.props;
        //return(<div> {movie.title}</div>)
        return <Card className='movie-card'>
        <CardMedia
          className="movie-image"
          image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {movie.title}
          </Typography>
          <Typography component="p">
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          {/* Add the funtion */}
          <Button size="small" color="primary" onClik={this.selectMovie}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    }
}

export default MovieCard;