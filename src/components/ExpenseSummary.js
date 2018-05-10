import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectTotalExpenses from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses';

export const ExpenseSammary = ({ expenseCount, expensesTotal }) => (
  <div>
  <p>
  Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totaling {numeral(expensesTotal / 100).format('$0,0.00')}
  </p>
  </div>
);

const mapToStateStore = (state) => {
  const visibleExpensestoShow = visibleExpenses(state.expenses, state.filters);
  return ({
    expenseCount: visibleExpensestoShow.length,
    expensesTotal: selectTotalExpenses(visibleExpensestoShow)
  });
}

export default connect(mapToStateStore)(ExpenseSammary);
