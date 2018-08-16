import React, { Fragment } from 'react';

export const Rating = ({ ratingValue, updateScoreFilter }) => {
	return (
		<Fragment>
			<label htmlFor="rating"><h3>Min Rating ({ratingValue})</h3></label>
			<div className="filters__rating">
				<input id="rating" type="range" min="0" max="10" step="0.5" value={ratingValue} onChange={updateScoreFilter} />
			</div>
		</Fragment>
	);
};

export default Rating;