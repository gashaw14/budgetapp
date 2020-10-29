import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense ,removeExpense,editExpense} from '../../actions/expenses';
import expenses from '../expensesData/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[1]
    })  
    
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });
  
  test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
  
      return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
  });
  
// test('should setup add expense with default value',()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:
//         {
//             id:expect.any(String),
//             description:'',
//             note:'',
//             amount:0,
//             createdAt:0
    
//         }
//     });
// });

