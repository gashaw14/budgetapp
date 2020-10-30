import React from 'react';
import {NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


export const Header = ({startLogout}) =>{
   return(
       <div>
       <h1>Budget App</h1>
           <NavLink to="/dashboard" activeClassName="is-active" >DashBoard</NavLink>
           <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
           <button onClick={startLogout}>Logout</button>
       </div>
   )       
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startLogout: ()=>dispatch(startLogout())
    }
}
export default connect(undefined, mapDispatchToProps)(Header);