import React from 'react';
import Genre  from '../../components/Genre';

describe('Genre component', () => {
    test('Should render', () => {
        const wrapper = shallow(<Genre name={'Name'} id={1} onClick={() => {}} />);

        expect(wrapper).toMatchSnapshot();
    });
});