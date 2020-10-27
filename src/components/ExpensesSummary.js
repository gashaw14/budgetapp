import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import {getVisibileExpenses} from '../selectors/expenses';
import expensesTotal from '../selectors/Expenses-total';

export const ExpensesSummary = ({expenseCount, amountCount})=>{
    const expenseWord = expenseCount ===1 ? 'expense':'expenses'
    const dollar = numeral(amountCount/100).format('$0,0.00');
    return(
        <div>
        <h1> you have {expenseCount} {expenseWord} with {dollar} total amount</h1>
        </div>
    )
}

const mapSateToProps = (state)=>{
   const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);

   return{
       expenseCount: visibleExpenses.length,
       amountCount: expensesTotal(visibleExpenses)
   }
}

export default connect(mapSateToProps)(ExpensesSummary);