import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';


test('should setup expense text filters',()=>{
 const text ='rent detail'
 const action = setTextFilter(text);
 expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
 });
 
});

test('should setup expense text filters with default value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text:''
    });
    
   });

test('should setup start date',()=>{
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
    });
});

test('should setup end date',()=>{
    const action = setEndDate(moment());
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment()
    });
});

test('should sort expenses by date',()=>{
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should sort expenses by amount',()=>{
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});