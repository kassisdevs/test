import React from 'react';
import { Link } from 'react-router-dom'


export const ExpenseListItem = ({ dispatch, id, description, note, amount, createdAt }) => (
<div>
<Link to={`/edit/${id}`}>
<h1>{description}</h1>
</Link>
<p>{note}</p>
<p>{amount} - {createdAt}</p>
</div>
);


export default ExpenseListItem;