import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme';
import expenses from '../expensesData/expenses';

test('should test expenses list components',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should test when no expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});