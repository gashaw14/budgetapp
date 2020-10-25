import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../expensesData/expenses';

test('should test expense form',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should test the form with data',()=>{
 const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
 expect(wrapper).toMatchSnapshot();
});