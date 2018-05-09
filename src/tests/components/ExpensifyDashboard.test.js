import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyDashboard from '../../components/ExpensifyDashboard';

test('Sould render dashboard two components', () => {
  const wrapper = shallow(<ExpensifyDashboard />);
  expect(wrapper).toMatchSnapshot();
});