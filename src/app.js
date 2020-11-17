import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './router/AppRouter';
import {ConfigStore} from './store/configStore';
import { Provider } from 'react-redux';
import {startSetExpenses} from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';
import LoadingPage from './components/LoadingPage'

const store = ConfigStore();

// const state= store.getState()
// const visibleExpenses = getVisibileExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
     <AppRouter /> 
    </Provider>
);

let hasRendered = false;
const renderApp =()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered=true;
    }
}
ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname==='/'){
              history.push('/dashboard');
            }
        });
        
    } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    }
})



//upgrading this app
// add confirmation modal when removing expenses
//show number of hidden expenses in/dashboard summary
// add support for another social login system (facebook or twitter)


