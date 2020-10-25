import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../components/Home';

test('should test home page',()=>{
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});