import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import {ConfigStore} from './store/configStore';
import {getVisibileExpenses} from './selectors/expenses';
import {addExpense} from './actions/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';



const store = ConfigStore();
const expenseOne = store.dispatch(addExpense({description:'rent 1st payment', amount:5000000, createdAt:-2100}))
const expenseTwo = store.dispatch(addExpense({description:'lunch expense', amount:50000, createdAt:-1000}))

const state= store.getState()
const visibleExpenses = getVisibileExpenses(state.expenses,state.filters)
console.log(visibleExpenses)


const jsx = (
    <Provider store={store}>
     <AppRouter /> 
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));