import React from 'react';

import Label from '../../components/Label';

describe('Label component', () => {
	test('Should render', () => {
		const wrapper = shallow(<Label label={"test-label"} />);

		expect(wrapper).toMatchSnapshot();
	});
});
