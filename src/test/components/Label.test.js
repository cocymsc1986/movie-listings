import React from 'react';

import Label from '../../components/Label';
import { shallowToJson } from '../../../node_modules/enzyme-to-json';

describe('Label component', () => {
	test('Should render', () => {
		const wrapper = shallow(<Label label={"test-label"} />);

		expect(wrapper).toMatchSnapshot();
	});
});
