import {expensesReducer} from '../../reducers/expenses';
import expenses from '../expensesData/expenses';

test('should setup default expense reducer',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should setup remove expense reducer',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not removed the expense with wrong id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add expenses',()=>{
 const expense = {
     id: '10',
     description:'buy computer',
     amount: 1200,
     note:'',
     createdAt: 2000
 };
 const action = {
     type:'ADD_EXPENSE',
     expense
 };
const state = expensesReducer(expenses,action);
expect(state).toEqual([...expenses,expense]);
});

test('should setup edit to expenses',()=>{

    const amount = 160;
    const action ={
        type: 'EDIT_EXPENSE',
        id:expenses[0].id,
        update :{
        amount
        }    
    };
 const state = expensesReducer(expenses,action);
 expect(state[0].amount).toEqual(amount);
});