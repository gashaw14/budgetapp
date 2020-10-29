import database from '../firebase/firebase';
import uuid from 'uuid';
//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes


//components calls action generator
// action generator returns function
// component dispatches function 
// function runs (has the ability to dispatch other actions and do what ever it wants)

// redux-thunk -- used to dispatch functions
export const addExpense = (expense)=>{
    return {
        type:'ADD_EXPENSE',
        expense
    }
    };

export const startAddExpense = (expenseData={})=>{
     return (dispatch)=>{
     const {
        description='',
        note='',
        amount=0,
        createdAt=0
     }=expenseData;
     
     const expense = {description,note,amount,createdAt};

    return database.ref('expenses').push(expense).then((ref)=>{
      dispatch(addExpense({
          id: ref.key,
          ...expense
      }));
     });
     };
    }
  export  const removeExpense =({id}={})=>{
    return{
        type: 'REMOVE_EXPENSE',
        id
    }
    }
    
  export  const editExpense = (id,update) =>{
    return {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
    }

    //SET_EXPENSE
   export const setExpenses = (expenses)=>{
     return{
       type:'SET_EXPENSES',
       expenses
     }
    }

    //fetch all expense data once
    // parse that data into an array
    //dispatch SET_EXPENSES
  
 export  const startSetExpenses = ()=>{
   return (dispatch)=>{

     return database.ref('expenses').once('value').then((snapshot)=>{
       const expenses = []
       snapshot.forEach((childSnapshot)=>{
       expenses.push({
           id: childSnapshot.key,
           ...childSnapshot.val()
         });

       })

       dispatch(setExpenses(expenses));
      })
   }
    }

// database.ref('expenses').once('value')
// .then((snapshot)=>{
// const expenses = [];
// snapshot.forEach((childSnapshot)=>{
// expenses.push({
//   id: childSnapshot.key,
//   ...childSnapshot.val()
// });
// })
// console.log(expenses);
// });