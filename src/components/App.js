import React from "react";
import MovieList from './MovieList'
import SearchBar from "./SearchBar";
import axios from 'axios';

import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  LIST_BASE_URL,
  API_URL,
  API_KEY,
} from '../config';

class App extends React.Component {

    state = {
      movies : [],
      searchQuery :""
    }

    async componentDidMount(){      
     
      // Popolar Movie 
      //const response = await axios.get(`${POPULAR_BASE_URL}&page=1`);
      //console.log(response.data.results)
      //this.setState({movies:response.data.results})

      // Movie List
      const response = await axios.get(`${LIST_BASE_URL}`);
      console.log(response.data.items)
      this.setState({movies:response.data.items})
    }

    deleteMovie = async (movie) => {
      axios.delete(`http://localhost:3002/movies/${movie.id}`)
      const newMovieList = this.state.movies.filter(
        m => m.id !== movie.id
      )    
      this.setState(state => ({
        movies:newMovieList
      }))

    }       
      
          
    searchMovie = (event) => {
      this.setState({searchQuery: event.target.value})
    }

  render() {

    let filteredMovie = this.state.movies.filter(
      (movie) => {
        return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                   <SearchBar searchMovie={this.searchMovie} />
                </div>
            </div>
            <MovieList 
            movies ={filteredMovie}
            deleteMovieProp={this.deleteMovie} />
        </div>
        );
  }
}

export default App;
