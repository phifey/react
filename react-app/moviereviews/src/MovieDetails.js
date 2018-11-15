import React, {Component} from 'react';

class MovieDetails extends Component {
    render() {
        const {current} = this.props;
		
        return (
			<div>
			{
				current !== '' ?
				<div className="movieDetailsInner">
					<h1>{current.title}</h1>
					<p>{current.description}</p>
					<img src={current.posterUrl} alt={current.title} />
					<p>{current.rating}</p>
					<p>{current.director}</p>
					<p>{current.releaseYear}</p>
					<p>{current.categories}</p>
				</div>
				:
					<p>{alert("Select a Movie")}</p>
			}
			</div>
        );
    }
}

export default MovieDetails;
