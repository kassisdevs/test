



// Create Redux Store
const store = createStore(
  combineReducers({
    expenses: expencesReducer,
    filters: filtersReducer
   })
);

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses)
})


// store.dispatch(REMOVE_EXPENSE({ id: expenseOne.expense.id }))
// store.dispatch(EDIT_EXPENSE({ id: expenseTwo.expense.id, updates: { amount: 180000, description: 'car fixed after accident' } }))

// store.dispatch(setTextInput('fix'))

store.dispatch(sortbyAmount())
// store.dispatch(sortbyDate())
// store.dispatch(setStartDate(0)) // Set it to 125
// store.dispatch(setStartDate(1500)) // Set it to undefined
// store.dispatch(setEndDate(1500))
// store.dispatch(setEndDate())

const demoState = {
  expensises: [{
    id: 'dawd',
    description: 'rent',
    note: 'june rent',
    amount: 104400,
    createdAt: 0
  }],
  filters: {
    text: 'userInput',
    sortBy: 'amount', // date or amount
    starteDate: undefined,
    endDate: undefined
  }
}
