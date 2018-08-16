import React from 'react';

import Rating from '../../components/Rating';

describe('Rating component', () => {
	test('Should render', () => {
		const wrapper = shallow(<Rating ratingValue={5} updateScoreFilter={() => {}} />);

		expect(wrapper).toMatchSnapshot();
	});
});