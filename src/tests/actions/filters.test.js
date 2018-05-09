import moment from 'moment';
import { 
  setTextInput, 
  sortbyAmount, 
  sortbyDate, 
  setStartDate, 
  setEndDate } from '../../actions/filters';

// setTextInput
test('Should return object with string', () => {
  const textInput = setTextInput('rent');
  expect(textInput).toEqual({
    type: 'SET_USER_INPUT',
    text: 'rent'
  })
});
test('Should return object using default value', () => {
  const textInput = setTextInput();
  expect(textInput).toEqual({
    type: 'SET_USER_INPUT',
    text: ''
  })
});

// setStartDate
test('Should return object with date', () => {
  const date = setStartDate(moment(0));
  expect(date).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});
test('Should return object with date', () => {
  const date = setEndDate(moment(1000));
  expect(date).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000)
  });
});
// sortbyDate sortbyAmount
test('Should return object with just type', () => {
  const byDate = sortbyDate();
  const byAmount = sortbyAmount();

  expect(byDate).toEqual({
    type: 'SORT_BY_DATE'
  });
  expect(byAmount).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

