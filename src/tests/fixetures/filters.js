import moment from 'moment';

const defaultFilter = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

const dataFilter = {
  text: 'rent',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(5, 'days')
};

export { defaultFilter, dataFilter }
