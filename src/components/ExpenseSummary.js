import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpenseSammary = (props) => (
  <div>
  <p>
  Viewing {props.expenseCount} expenses totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}
  </p>
  </div>
);

const mapToStateStore = (state) => ({
  expenseCount: state.expenses.length,
  expensesTotal: selectTotalExpenses(state.expenses)
});

export default connect(mapToStateStore)(ExpenseSammary);
