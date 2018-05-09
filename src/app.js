import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configureStore';
import { ADD_EXPENSE } from './actions/expenses';
import { setTextInput } from './actions/filters';
import getVisibleExpenses from '../src/selectors/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// Add water bill
store.dispatch(ADD_EXPENSE({ createdAt: 3000, description: 'rent', note: 'june', amount: 104000 }))
store.dispatch(ADD_EXPENSE({ createdAt: 1000, description: 'car fix', note: 'jully', amount: 170000 }))
store.dispatch(ADD_EXPENSE({ createdAt: 2000, description: 'T-mobile', note: 'canada BC', amount: 87000 }))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
