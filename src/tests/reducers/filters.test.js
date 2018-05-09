import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should take default', () => {
 const reducer = filtersReducer(undefined, { type: '@@INT' });
 expect(reducer).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
 )
});

test('Should sort by amount', () => {
  const reducer = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(reducer).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
 });

 test('Should sort by date', () => {
  const state = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const reducer = filtersReducer(state, { type: 'SORT_BY_DATE' });
  expect(reducer).toEqual({
    ...state,
    sortBy: 'date'
  })
 });

 test('Should SET_START_DATE', () => {
  const state = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const reducer = filtersReducer(state, { type: 'SET_START_DATE', startDate: moment(0) });
  expect(reducer).toEqual({
    ...state,
    startDate: moment(0),
  })
 });

 test('Should SET_END_DATE', () => {
  const state = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: undefined
  }
  const reducer = filtersReducer(state, { type: 'SET_END_DATE', endDate: moment(1000) });
  expect(reducer).toEqual({
    ...state,
    endDate: moment(1000),
  })
 });