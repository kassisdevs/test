import uuid from 'uuid';

// ADD_EXPENCE action
export const ADD_EXPENSE = ({
  id = uuid(),
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
  id,
  description,
  note,
  amount,
  createdAt
  }
});

// EDIT EXPENCES
export const EDIT_EXPENSE = ({
  id,
  updates
}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// REMOVE_EXPENSES
export const REMOVE_EXPENSE = (
{
id
} = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id
})