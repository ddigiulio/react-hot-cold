import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    const seedCards = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedCards.push(i);
        }
    });
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    });
    it('should render the correct amount of guesses', () =>{
        const wrapper= shallow(<GuessList guesses={seedCards} />)
        expect(wrapper.find('li').length).toEqual(10)
    }); 


});
