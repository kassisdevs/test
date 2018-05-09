import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ dispatch, id, description, note, amount, createdAt }) => (
<div>
<Link to={`/edit/${id}`}>
<h1>{description}</h1>
</Link>
<p>{note}</p>
<p>
{numeral(amount / 100).format('$0,0.00')} - 
{moment(createdAt).format('MMMM do, YYYY')}</p>
</div>
);


export default ExpenseListItem;