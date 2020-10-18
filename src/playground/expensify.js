import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

//action generator
const addExpense = (
{description='',note='',amount=0,createdAt=0}={}
)=>{
return {
    type:'ADD_EXPENSE',
    expense:
    {
        id:uuid(),
        description,
        note,
        amount,
        createdAt

    }
}
}
const removeExpense =({id}={})=>{
return{
    type: 'REMOVE_EXPENSE',
    id
}
}

const editExpense = (id,update) =>{
return {
    type: 'EDIT_EXPENSE',
    id,
    update
}
}

const setTextFilter = (text='')=>{
 return{
     type: 'SET_TEXT_FILTER',
     text
 }
}
const sortByDate = ()=>{
 return{
     type:'SORT_BY_DATE'
 }
}
const sortByAmount = ()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}

const setStartDate = (startDate)=>{
    return{
        type: 'SET_START_DATE',
        startDate
    }
}
const setEndDate = (endDate)=>{
    return{
        type:'SET_END_DATE',
        endDate
    }

}
const expensesReducerDefaultState = [];
const expensesReducer = (state=expensesReducerDefaultState, action)=>{
    switch(action.type){
    case 'ADD_EXPENSE':
      return [...state,action.expense] 
    case 'REMOVE_EXPENSE':
     return state.filter(({id})=>id !== action.id)

    case 'EDIT_EXPENSE':
    return state.map((expense)=>{
     if(expense.id === action.id){
      return {...expense, ...action.update}
     } else{
         return expense
     }
    })
    default:
      return state;
    }

}


const filtersReducerDefaultState = {
    text:'',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState, action)=>{
  
    switch(action.type){
    case 'SET_TEXT_FILTER':
        return{
         ...state,
         text:action.text
      }
    case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy: 'date'
        }
    case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:'amount'
        }
    case 'SET_START_DATE':
        return{
            ...state,
            startDate: action.startDate
        }
    case 'SET_END_DATE':
        return{
            ...state,
            endDate: action.endDate
        }
    default:
        return state;
    }

}

const getVisibileExpenses =(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number'|| expense.startDate >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.endDate <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch 
    }).sort((a,b)=>{
      if(sortBy==='date'){
          return a.createdAt < b.createdAt ? 1:-1
      } else if(sortBy==='date'){
          return a.amount < b.amount ? 1: -1
      }
    })
 
}
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)
store.subscribe(()=>{
    const state= store.getState()
    const visibleExpenses = getVisibileExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'rent 1st payment', amount:5000000, createdAt:-2100}))
const expenseTwo = store.dispatch(addExpense({description:'lunch expense', amount:50000, createdAt:-1000}))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:60}))
// store.dispatch(setTextFilter('lu'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
//store.dispatch(setStartDate(0))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(999))
store.dispatch(sortByDate())

const expenseapp = {
    expenses:[{
        id: '1335',
        description:'rent for october',
        note: 'this is a payment done last month',
        amount: 5000,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    
    }
    
   }




