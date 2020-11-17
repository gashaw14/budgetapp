import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';


export class EditExpensePage extends React.Component {
    state = {
        modalOpen: false
    }
    delete = () => {
        this.setState(() => ({
            modalOpen: false
        }))
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/dashboard');
    }

    noDelete = () => {
        this.setState(() => ({
            modalOpen: false
        }))
        this.props.history.push('/dashboard');
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    }

    onRemove = () => {
        this.setState(() => ({
            modalOpen: true
        }))

        // this.props.startRemoveExpense({ id: this.props.expense.id });
        // this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div >
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>

                </div>
                
    
                    <Modal
                        isOpen={this.state.modalOpen}
                        onRequestClose={this.delete || this.noDelete}
                        closeTimeoutMS={200}
                        className="modal"

                    >
                        <p className="modal__title">Are you sure to delete your expense?</p>
                        <button className=" button button--modal" onClick={this.noDelete}>No</button>
                        <button className="button button--modal" onClick={this.delete}>Yes</button>
                    </Modal>
                   
                   
                </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
                    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))

    }

}

const mapStateToProps = (state, props) => {
    return {
                    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);