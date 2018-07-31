import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import InputAdorment from '@material-ui/core/InputAdornment';

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
        )
    }
}

export default NavBar;