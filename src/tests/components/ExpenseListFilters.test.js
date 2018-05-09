import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from './../fixetures/expenses';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilter, dataFilter } from './../fixetures/filters';

let setTextInput, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper;

beforeEach (() => {
  setTextInput = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={defaultFilter}
    setTextInput={setTextInput}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    sortbyAmount={sortByAmount}
    sortbyDate={sortByDate}
    />);
});

test('Should render ExpenseListFilters with default filters ', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with  datafilters ', () => {
    wrapper.setProps({
      filters: dataFilter
    })
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  const value = 'rent';
    wrapper.find('input').simulate('change', {
     target: { value }
    });
    expect(setTextInput).toHaveBeenLastCalledWith(value);
});

test ('Should handle filter change with date', () => {
  const date = 'date';
    wrapper.find('select').simulate('change', {
    target: { value: date }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test ('Should handle filter change with amount', () => {
  const amount = 'amount';
    wrapper.find('select').simulate('change', {
    target: { value: amount }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test ('Should handle calenderFocused on the state', () => {
  const focus = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);
    expect(wrapper.state('calenderFocused')).toEqual(focus);
});