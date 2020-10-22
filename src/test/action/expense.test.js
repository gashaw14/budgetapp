import {addExpense ,removeExpense,editExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'12ab'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12ab'
    });
});

test('should setup edit expense action object',()=>{
    const action = editExpense('as12',{description:'rent last months'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'as12',
        update:{
            description:'rent last months' 
        }
    });
});

test('should setup add expense action object',()=>{
    const expenseData = {
        description:'rent',
        note:'2nd month rent',
        amount: 111000,
        createdAt:1000
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:
        {
            ...expenseData,
            id: expect.any(String)
    
        }
        
    })
});

test('should setup add expense with default value',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:
        {
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
    
        }
    });
});

