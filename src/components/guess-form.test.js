import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Renders inputs for user guesses initially', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.find('input[type="text"]').hasClass('text')).toEqual(true);
    });

    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = '1';
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

});
