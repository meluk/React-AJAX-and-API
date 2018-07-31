import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';

export default class MovieDialog extends React.Component {
  /*state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };*/

  render() {
      const {movie, handleClose} = this.props;
      let title = null;
      let content;
      
      //creat the component
      if(movie){
        title = <DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>
        content = (
          <DialogContent>
            <DialogContentText>
              {movie.overview}
            </DialogContentText>
            <CardMedia
              className="movie-detail-image"
              image={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
              title={movie.title}
            />
            <TextField
              label="Release Date"
              type="date"
              value={movie.release_date}
              disabled
              fullWidth
            />
            <TextField
              label="Popularity"
              value={movie.popularity}
              disabled
              fullWidth
            />
            <TextField
              label="Vote Average"
              value={movie.vote_average}
              disabled
              fullWidth
            />
            <TextField
              label="Vote Count"
              value={movie.vote_count}
              disabled
              fullWidth
            />
          </DialogContent>
        )
      }
    return (
      <div>
        <Button onClick={this.handleClickOpen}>More</Button>
        <Dialog
          open={!!movie}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          {title}
          {content}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}