import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import {ConfigStore} from './store/configStore';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = ConfigStore();

// const state= store.getState()
// const visibleExpenses = getVisibileExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
     <AppRouter /> 
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));