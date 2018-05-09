import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensifyDashboard = () => (
  <div>
  <ExpenseListFilters />
  <ExpenseList />
  </div>
 );

 export default ExpensifyDashboard;