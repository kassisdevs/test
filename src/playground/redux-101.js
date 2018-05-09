import { createStore } from 'redux';

// Action generators

const increment = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrement = ( { decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const reset = () => ({
  type: 'RESET',
});

const set = ( { set } = {}) => ({
  type: 'SET',
  set
});
// Define Reducer
// 1 REDUCER ARE PURE FUNTIONS RETURN DEPENDS COMPLETELY ON THE USER INPUT
// 2 DOES NOT CHANGE THE STATE AND ACTION FUNCTIONALITY

const appReducer = ((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return { count: state.count + action.incrementBy }
    case 'DECREMENT':
    return { count: state.count - action.decrementBy }
    case 'SET':
    return { count: action.set }
    case 'RESET':
    return { count: 0 }
    default: 
    return state
  }
});
const store = createStore(appReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Increment
store.dispatch(increment());
store.dispatch(increment({ incrementBy: 10 }));

// Decrement
store.dispatch(decrement());
store.dispatch(decrement({ decrementBy: 5 }));

// Reset 
store.dispatch(reset());

// Set
store.dispatch(set({ set: 100 }));
// store.dispatch(increment());