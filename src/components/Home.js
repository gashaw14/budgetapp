import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const Home =()=>(
    <div>
    <ExpenseListFilter />
    <ExpenseList />
    </div>
    
)
   


export default Home;