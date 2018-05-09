import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { ADD_EXPENSE } from '../actions/expenses';
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <ExpenseForm
      onSubmit={this.onSubmit}
      />
      </div>
     );
  }
};


 const mapTodispatch = (dispatch) => ({
  addExpense: (expense) => dispatch(ADD_EXPENSE(expense))
 });

 export default connect(undefined, mapTodispatch)(AddExpensePage);