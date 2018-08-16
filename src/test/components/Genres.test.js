import React from 'react';

import Genres from '../../components/Genres';
import Genre from '../../components/Genre';

describe('Genres component', () => {
    const genres = [
        {
            name: 'test-1',
            id: 1
        },
        {
            name: 'test-2',
            id: 2
        },
        {
            name: 'test-3',
            id: 3
        },
    ];

    test('Should render as many Genre options as is passed in', () => {
        const wrapper = shallow(<Genres genres={genres} clickCheckBox={() => {}} />);
        expect(wrapper.find(Genre)).toHaveLength(3);
    });

    test('Should pass the correct props to <Genre />', () => {
        const wrapper = shallow(<Genres genres={genres} clickCheckBox={() => {}} />);

        expect(wrapper.find(Genre).at(0).prop('name')).toBe('test-1');
        expect(wrapper.find(Genre).at(0).prop('id')).toBe(1);
        expect(wrapper.find(Genre).at(1).prop('name')).toBe('test-2');
        expect(wrapper.find(Genre).at(1).prop('id')).toBe(2);
        expect(wrapper.find(Genre).at(2).prop('name')).toBe('test-3');
        expect(wrapper.find(Genre).at(2).prop('id')).toBe(3);
    })
})