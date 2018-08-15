import React from 'react';
import Movie from '../../components/Movie';
import Label from '../../components/Label';

describe.only('Movie component', () => {
	let wrapper;

	beforeEach(() => {
		const props = {
			imagePath: 'path/to/image',
			title: 'test-title',
			movieKey: 1,
			genreLabels: ['test']
		};

		wrapper = shallow(<Movie {...props} />);
	});

	test('Should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render label with correct prop', () => {
		expect(wrapper.find(Label).prop('label')).toBe('test');
	});
});