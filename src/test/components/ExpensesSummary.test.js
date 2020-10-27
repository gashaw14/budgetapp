import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should test a single expense summary',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} amountCount={200}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should test a multiple expenses summary',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3} amountCount={23000000}/>);
    expect(wrapper).toMatchSnapshot();
});