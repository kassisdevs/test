import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
 <div>
 {
   props.expenses.length === 0 ? (
      <p>no expenses</p>
   ) : (
      props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} { ...expense } />
      ))
   )
 }
 
 </div>
);

const mapToStateStore = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
  };

export default connect(mapToStateStore)(ExpenseList);