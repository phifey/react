import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movies from './JSONData';
import MovieCards from './MovieCards';
import MovieDetails from './MovieDetails';

class App extends Component {
	
	_currentMovie = (movie) => {
		this.setState({
			currentMovie: movie
		});
	}
	
	constructor(props) {
		super(props);
		this.state = {
			currentMovie: ''
		};
		this.currentMovie = this._currentMovie.bind(this);
	}
	
  render() {
    return (
		<div className="movieReviews-container">
			<div className="movieCards">  
				<MovieCards
					current={this.currentMovie}
					movies={movies}
				/>
			</div>
			<div className="movieAdvancedDetails">
			<MovieDetails className="movieDetails"
					current={this.state.currentMovie}
				/>
			</div>
	   </div>
    );
  }
}

export default App;
