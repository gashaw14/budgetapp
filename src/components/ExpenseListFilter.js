import React from 'react';
import {setTextFilter, sortByDate,sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';

class ExpenseListFiter extends React.Component{

    state={
        focusedInput:null
    }


onDatesChange =({startDate,endDate})=>{
 this.props.dispatch(setStartDate(startDate))
 this.props.dispatch(setEndDate(endDate))
    }
onFocusChange=(focusedInput)=>{
this.setState(()=>({focusedInput}))
}

    render(){
    return(
        <div>
            <input type='text' value={this.props.filters.text} onChange={(e)=>{
             this.props.dispatch(setTextFilter(e.target.value))
            }}/>

            <select value={this.props.filters.sortBy}
            onChange={(e)=>{
            if(e.target.value==='amount'){
                this.props.dispatch(sortByAmount());
            } else if(e.target.value==='date'){
                this.props.dispatch(sortByDate())
            }
            }}
            >
          <option value='amount'>Amount</option>
          <option value='date'>Date</option>
        </select>
         <DateRangePicker 
            startDate={this.props.filters.startDate} 
            endDate={this.props.filters.endDate} 
            onDatesChange={this.onDatesChange} 
            focusedInput={this.state.focusedInput} 
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            showClearDates={true}
            isOutsideRange={() => false}
    
           
         />
        </div>
    )
}
}
const mapStateToProps =(state)=>{
    return{
        filters: state.filters
    }

}

export default connect(mapStateToProps)(ExpenseListFiter)