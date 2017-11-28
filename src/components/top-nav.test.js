import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should render two list items', () => {
        const wrapper = shallow(<TopNav />);

        expect(wrapper.find('li').length).toEqual(2);
    });


});