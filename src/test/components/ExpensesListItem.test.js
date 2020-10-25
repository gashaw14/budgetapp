import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../expensesData/expenses';

test('should test list item components',()=>{
 const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
 expect(wrapper).toMatchSnapshot();
});
