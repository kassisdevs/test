import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import { expenses } from './../fixetures/expenses';


test('Should render an expense object', () => {
  const wrapper = shallow(<ExpenseListItem key={expenses[1].id} { ...expenses[1] } />);
  expect(wrapper).toMatchSnapshot();
});