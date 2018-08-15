import React, { Component } from 'react';
import Label from './Label';

export class Movie extends Component {

	render() {
		const { genreLabels, imagePath, title, movieKey } = this.props;

		return (
			<ul key={movieKey}>
				<li><img src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt={`${title}-image`} /></li>
				<li>{title}</li>
				<li>{genreLabels.map((label, key) => <Label label={label} key={key} />)}</li>
			</ul>
		);
	}
}

export default Movie;