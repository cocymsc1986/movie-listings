import React from 'react';

import App from '../../components/App';

describe('App component', () => {

	test('Should render', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render with moviesError', () => {
		const wrapper = shallow(<App moviesError={true} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render with genresError', () => {
		const wrapper = shallow(<App genresError={true}/>);
		expect(wrapper).toMatchSnapshot();
	});
});