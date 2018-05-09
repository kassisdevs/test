import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { expenses } from './../fixetures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('Should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Shoul render an object', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should change State desctription onSubmit', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect((wrapper).state('error').length).toBeGreaterThan(0);
});

test('Should change State description on change', () => {
  const value = 'new description passed';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect((wrapper).state('description')).toBe(value);

});

test('Should set State note on textarea', () => {
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
  target: { value }
  });
  expect((wrapper).state('note')).toBe(value);
});

test('Should pass valid amount and change the amount state', () => {
  const value = '59.00';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
   target: { value }
  });
  expect((wrapper).state('amount')).toBe(value);
});

test('Should not change state amount if we pass not valid RE', () => {
  const value = '32.08.33';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
   target: { value }
  });
  expect((wrapper).state('amount')).toBe('');
});

test('Should call onSubmit form with valid input', () => {
  const mockSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={mockSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(mockSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('Should set new date on date change', () => {
  const date = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(date);
  expect(wrapper.state('createdAt')).toBe(date);
});

test('Should set calenderFocused to true', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarfocused')).toBe(focused);
});