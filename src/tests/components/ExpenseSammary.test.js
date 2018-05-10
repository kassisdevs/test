import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSammary } from '../../components/ExpenseSummary';
import { expenses } from './../fixetures/expenses';
import selectTotalExpenses from '../../selectors/expenses-total';

test('Should return 0 expenses and 0 total', () => {
  const wrapper = shallow(<ExpenseSammary />);
  expect(wrapper).toMatchSnapshot();
});

test('Should return 3 expense and 3 total', () => {
  const expenseCount = expenses.length;
  const expensesTotal = selectTotalExpenses(expenses);
  const wrapper = shallow(<ExpenseSammary
    expenseCount={expenseCount}
    expensesTotal={expensesTotal}
  />);
  expect(wrapper).toMatchSnapshot();
});
