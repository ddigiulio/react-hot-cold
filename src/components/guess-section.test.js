import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the header with correct feedback', () => {
        const title = "Foo";
        const wrapper = shallow(<GuessSection feedback={title} />);
         expect(wrapper.find("h2").text()).toEqual(title);
    });

    // it('Should fire the onGuess callback when the form is submitted', () => {
    //     //ask why .instance() did not work
    //     const callback = jest.fn();
    //     const wrapper = mount(<GuessForm onGuess={callback} />);
    //     const value = '1';
    //     wrapper.find('input[type="text"]').node.value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value);
    // });

});