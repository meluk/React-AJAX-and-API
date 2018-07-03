import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {
    render(){
       /* const {movie} = this.props;

        return(<div> {movie.title}</div>)*/
        return(
             <div> 
                 <AppBar position="static">
                   <Toolbar>
                       <Typography variant="title" color="inherit">
                        Movies
                       </Typography>
                   </Toolbar>
                 </AppBar>
             </div>
        )
    }
}

export default NavBar;