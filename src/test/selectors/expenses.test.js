import moment from 'moment';
import {getVisibileExpenses} from '../../selectors/expenses';
import expenses from '../expensesData/expenses';


test('should filter by text value',()=>{
    const filters ={
        text:'e',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = getVisibileExpenses(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[2]]);
});

test('should filter by start date',()=>{
    const filters ={
        text:'',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    };
    const action = getVisibileExpenses(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[0]]);
});

test('should filter by end date',()=>{
    const filters ={
        text:'',
        sortBy:'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const action = getVisibileExpenses(expenses,filters);
    expect(action).toEqual([expenses[0],expenses[2]]);
});

test('should filter by date',()=>{
    const filters ={
        text:'',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = getVisibileExpenses(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[0],expenses[2]]);
});

test('should filter by amount',()=>{
    const filters ={
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = getVisibileExpenses(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[2],expenses[0]]);
})
