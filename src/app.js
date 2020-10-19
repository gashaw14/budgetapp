import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import {ConfigStore} from './store/configStore';
import {getVisibileExpenses} from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';


const store = ConfigStore();
const expenseOne = store.dispatch(addExpense({description:'rent 1st payment', amount:5000000, createdAt:-2100}))
const expenseTwo = store.dispatch(addExpense({description:'lunch expense', amount:50000, createdAt:-1000}))
//store.dispatch(setTextFilter('lu'))  

const state= store.getState()
const visibleExpenses = getVisibileExpenses(state.expenses,state.filters)
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'));