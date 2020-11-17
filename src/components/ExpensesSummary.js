import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { getVisibileExpenses } from '../selectors/expenses';
import expensesTotal from '../selectors/Expenses-total';

export const ExpensesSummary = ({ expenseCount, amountCount, hiddenCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const dollar = numeral(amountCount / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> you have <span>{expenseCount}</span> {expenseWord} with <span>{dollar}</span> total amount</h1>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapSateToProps = (state) => {
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    

    return {
        expenseCount: visibleExpenses.length,
        amountCount: expensesTotal(visibleExpenses)
        
    }
}

export default connect(mapSateToProps)(ExpensesSummary);