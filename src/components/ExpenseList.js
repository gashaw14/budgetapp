import React from 'react';
import { connect } from 'react-redux';
import {getVisibileExpenses} from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props)=>{
    return(
        <div>
            <h1>Expense List</h1>
         {props.expenses.map((expense)=>{
          return <ExpenseListItem key={expense.id}{...expense}/>
         })}   
        </div>
    )
}

const mapStateToProps = (state)=>{
return {
expenses: getVisibileExpenses(state.expenses,state.filters)
}
}
export default connect(mapStateToProps)(ExpenseList);
