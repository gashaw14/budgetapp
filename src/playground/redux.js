import {createStore} from 'redux';


// action generator
const incrementCount = ({incrementBy=1}={})=>({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({decrementBy=1}={})=>{
    return {
        type: 'DECREMENT',
        decrementBy
    }
}
const setCount = ({count}) => {
    return {
        type: 'SET',
        count
    }
}

const resetCount = ()=>{
    return {
        type: 'RESET'
    }
}
const countReducer = (state={count:0},action)=>{
switch(action.type){
  case 'INCREMENT':
      //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return{
          count: state.count + action.incrementBy
      };

      case 'DECREMENT':
         // const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy : 1
          return {
              count: state.count - action.decrementBy
          };
      case 'SET':
          return{
              count : action.count
          }
          case 'RESET':
              return{
                  count: 0
              }

              default:
            return state
    }

}
const store = createStore(countReducer)
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementCount({incrementBy:8}))
store.dispatch(incrementCount())
store.dispatch(decrementCount({decrementBy: 2}))
store.dispatch(setCount({count:100}))
store.dispatch(resetCount())
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy:5
// })
// store.dispatch({
//     type: 'INCREMENT'
// })

// store.dispatch({
//     type:'DECREMENT'
// })


// store.dispatch({
//     type:'RESET'
// })
// store.dispatch({
//     type: 'SET',
//     count: 100
// })
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 20
// })
