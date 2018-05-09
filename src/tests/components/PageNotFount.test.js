import React from 'react';
import { shallow } from 'enzyme';
import PageNotFount from '../../components/PageNotFount';

test('Should render help page', () => {
  const wrapper = shallow(<PageNotFount />);
  expect(wrapper).toMatchSnapshot();
});