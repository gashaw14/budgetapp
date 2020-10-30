import database from '../firebase/firebase';

// redux-thunk -- used to dispatch functions
export const addExpense = (expense)=>{
    return {
        type:'ADD_EXPENSE',
        expense
    }
    };

export const startAddExpense = (expenseData={})=>{

     return (dispatch,getState)=>{
    const uid = getState().auth.uid;
     const {
        description='',
        note='',
        amount=0,
        createdAt=0
     }=expenseData;
     
     const expense = {description,note,amount,createdAt};

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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
  export const startRemoveExpense=({id}={})=>{
   return (dispatch,getState)=>{
     const uid = getState().auth.uid;
  return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
    dispatch(removeExpense({id}));
  });
   }

   } 

  export  const editExpense = (id,update) =>{
    return {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
    }
export  const startEditExpense = (id,update)=>{
return (dispatch, getState)=>{
  const uid = getState().auth.uid;
 return database.ref(`users/${uid}/expenses/${id}`).update(update).then(()=>{
  dispatch(editExpense(id,update))
 });
  
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
   return (dispatch,getState)=>{
       const uid = getState().auth.uid;
     return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
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

