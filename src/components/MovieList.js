import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const MovieList = (props) => {
  
    return (
      <div className="row">

        {props.movies.map((movie) => (

          <div className="col-lg-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                className="card-img-top"
                alt="Sample Movie"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    onClick={(event)=> props.deleteMovieProp(movie)}
                  >Delete</button>
                  <h2>
                    <span className="badge badge-info">{movie.vote_average}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  
}

export default MovieList;
