import React, {Component} from 'react';

class MovieCards extends Component {
    render() {
        const {current, movies} = this.props;
		
        return (
			movies.map((movie) => {
				return (
					<div key={movie.title} className="card">
						<img className="card-images" src={movie.posterUrl}/>
						<p>{movie.title}</p>
						<button
						 onClick={() => current(movie)} value={movie.title}
						> Details
						</button>
					</div>
				);
			})
        );
    }
}

export default MovieCards;
