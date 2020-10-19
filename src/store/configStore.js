import {createStore,combineReducers} from 'redux';
import {expensesReducer} from '../reducers/expenses';
import {filtersReducer} from '../reducers/filters';

export const ConfigStore =()=>{
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )
    return store;
}
