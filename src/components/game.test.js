import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can start a new game', ()=> {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses = [12, 19, 17],
            feedback = "You got it",
            correctAnswer = "-1"
        });
        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Can make guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 75
    });

    wrapper.instance().makeGuess(30);
    expect(wrapper.state('guesses')).toEqual([30]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(60);
    expect(wrapper.state('guesses')).toEqual([30, 60]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(70);
    expect(wrapper.state('guesses')).toEqual([30, 60, 70]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(75);
    expect(wrapper.state('guesses')).toEqual([30, 60, 70, 75]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });

    

});