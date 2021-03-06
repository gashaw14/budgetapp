import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense ,removeExpense,editExpense,
setExpenses,startRemoveExpense,startEditExpense} from '../../actions/expenses';
import expenses from '../expensesData/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);
beforeEach((done)=>{
  const expenseData ={};
  expenses.forEach(({id,description,note,amount, createdAt})=>{
    expenseData[id] = {description,note,amount, createdAt};

  });
  database.ref('expenses').set(expenseData).then(()=>done());
});
test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'12ab'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12ab'
    });
});
test('should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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
test('should edit expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = { amount: 21045 };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
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
  test('should setup set expense action object with data',()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
  });

  test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
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

