import selectExpenseTotal from '../../selectors/expenses-total';
import { expenses } from './../fixetures/expenses';

test('Should return 0 when you pass an array length 0', () => {
  const getTotal = selectExpenseTotal([]);
  expect(getTotal).toBe(0);
});

test('Should return one amount when you pass an array of one object', () => {
  const getTotal = selectExpenseTotal([expenses[0]]);
  expect(getTotal).toBe(6000);
});

test('Should return total amount when you pass an array of multiple objects', () => {
  const getTotal = selectExpenseTotal(expenses);
  expect(getTotal).toBe(9500);
});