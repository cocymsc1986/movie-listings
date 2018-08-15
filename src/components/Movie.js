import React, { Component } from 'react';
import Label from './Label';

export class Movie extends Component {

	render() {
		const { genreLabels, imagePath, title } = this.props;

		return (
			<article className="movies__result">
				<div className="movies__image"><img src={`https://image.tmdb.org/t/p/w200/${imagePath}`} alt={`${title}`} /></div>
				<div>
					<div className="movies__title"><h3>{title}</h3></div>
					<div className="movies__genre-labels">{genreLabels.map((label, key) => <Label label={label} key={key} />)}</div>
				</div>
			</article>
		);
	}
}

export default Movie;