import expencesReducer from '../../reducers/expenses';

const expenses = [
  {
    id:'1',
    description: 'rent',
    amount: 8000
  },
  {
    id:'2',
    description: 'car',
    amount: 500
  }
]

test('Should set default array', () => {
  const action = { type: '@@INT' };
  expect(expencesReducer(undefined, action)).toEqual([]);
});
test('Should add expense to the array', () => {
  const expense = {
    description: 't-mobile',
    amount: 847
  }
  const action = { type: 'ADD_EXPENSE', expense: expense };
  expect(expencesReducer(expenses, action)).toEqual([
    ...expenses,
    action.expense
  ]);
});
test('Should remove expense to the array', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '1' };
  expect(expencesReducer(expenses, action)).toEqual([
    expenses[1]
  ]);
});
test('Should edit expense to the array', () => {
  const updates = {
    id:'1',
    description: 'renting',
    amount: 8001
  }
  const action = { type: 'EDIT_EXPENSE', updates: updates };
  expect(expencesReducer(expenses, action)).toEqual([
    ...expenses,
    ...updates
  ]);
});