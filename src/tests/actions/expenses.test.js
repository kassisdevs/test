import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../../actions/expenses';

test('Should remove expense and return object with id', () => {
  const remove = REMOVE_EXPENSE({ id: '13223' });
  expect(remove).toEqual({ type: 'REMOVE_EXPENSE', id: '13223'}); // {} !== {} [] !==[] use toEqual
});

test('Should edit expense and return object with id and updates', () => {
  const edit = EDIT_EXPENSE({ id: '737635', updates: { description: 'rent', note:'june', amount: 239000 }});
  expect(edit).toEqual({ type: 'EDIT_EXPENSE', id:'737635', updates: { description:'rent', amount: 239000, note:'june'}});
});

test('Should add expense and return object with new expense', () => {
  const add = ADD_EXPENSE({
    description: 'car', 
    note: 'july', 
    createdAt: 8876, 
    amount: 7769
  });
  expect(add).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
    description: 'car', 
    note: 'july', 
    createdAt: 8876, 
    amount: 7769,
      id: expect.any(String)
    }    
  });
});

test('Should add expense and return object with new expense default', () => {
  const adddefault = ADD_EXPENSE();
  expect(adddefault).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
      id: expect.any(String), 
      description: '', 
      note: '', 
      createdAt: 0, 
      amount: 0
    }});
});