export default (expenses) => expenses.map((expense) => expense.amount)
.reduce((total, value) => total + value, 0);
