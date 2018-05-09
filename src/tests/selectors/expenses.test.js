import moment from 'moment';
import visibleExpenses from '../../selectors/expenses';
import { expenses } from './../fixetures/expenses';


test('Should filter expenses by text input', () => {
  const filters = {
    text: 'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const sort = visibleExpenses(expenses, filters);
  expect(sort).toEqual([
    expenses[0],
    expenses[1]
  ]);
});

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(-1000),
    endDate: undefined
  };
  const sort = visibleExpenses(expenses, filters);
  expect(sort).toEqual([
    expenses[0],
    expenses[1]
  ]);
});

test('Should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const sort = visibleExpenses(expenses, filters);
  expect(sort).toEqual([
    expenses[1],
    expenses[2]
  ]);
});

test('Should filter by startDate and endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0)
  };
  const sort = visibleExpenses(expenses, filters);
  expect(sort).toEqual([
  ]);
});

test('Should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const sort = visibleExpenses(expenses, filters);
  expect(sort).toEqual([
    expenses[0],
    expenses[1],
    expenses[2]
  ]);
});

test('Should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const sort = visibleExpenses(expenses, filters);
  expect(sort).toEqual([
    expenses[0],
    expenses[2],
    expenses[1]
  ]);
});

