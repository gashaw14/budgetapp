import React from 'react';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter =()=>(
        
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
           <Route path="/" component={Home} exact={true}/>
           <Route path="/create" component={AddExpensePage}/>
           <Route path="/edit/:id" component={EditExpensePage}/>
           <Route path="/help" component={HelpPage} />
           <Route component={NotFoundPage} />
        </Switch>
        </div>
        
        </BrowserRouter>     
        
    )

export default AppRouter;