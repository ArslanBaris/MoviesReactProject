import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import axios from "axios";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  // Fetch
  // async componentDidMount(){
  //   const baseURL = "http://localhost:3002/movies";
  //   const response = await fetch(baseURL);
  //   const data = await response.json();
  //   this.setState({movies : data})
  // }

  // deleteMovie =  async (movie) => {
  //   const baseURL = `http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseURL, {
  //     method : "DELETE"
  //   })
  //   const newMovieList = this.state.movies.filter(
  //     m => m.id !== movie.id
  //   )
  //   this.setState(state => ({
  //     movies:newMovieList
  //   }))

  // }

  // Axios

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovie = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovie={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovie}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}>                
              </Route>

            <Route path="/add" component={AddMovie} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
