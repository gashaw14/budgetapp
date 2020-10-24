import moment from 'moment';
import {filtersReducer} from '../../reducers/filters';

test('should setup default filter reducer',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should setup text filter reducer',()=>{
    const text = 'here is the text';
    const action ={
        type:'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text);
});

test('should setup sortby date',()=>{
    const currentState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate: undefined
    };
    const action = {
        type:'SORT_BY_DATE'
    };

const state = filtersReducer(currentState,action);
expect(state.sortBy).toBe('date');
});

test('should setup sortby amount',()=>{
const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
expect(state.sortBy).toBe('amount');
});

test('should setup set start date',()=>{
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
});

test('should setup set end date',()=>{
const endDate = moment();
const action = {
    type: 'SET_END_DATE',
    endDate
  };
const state = filtersReducer(undefined, action);
expect(state.endDate).toEqual(endDate);
});

