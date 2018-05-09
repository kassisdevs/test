import moment from 'moment';

export const expenses = [{
  id: '1',
  description: 'rent',
  note: 'june',
  amount: 6000,
  createdAt: moment(0).add(5, 'days').valueOf()
},
{
  id: '2',
  description: 'car',
  note: 'june',
  amount: 500,
  createdAt: moment(0).add(1, 'days').valueOf()
},
{
  id: '3',
  description: 'phone',
  note: 'aughst',
  amount: 3000,
  createdAt: moment(0).subtract(2, 'days').valueOf()
}];