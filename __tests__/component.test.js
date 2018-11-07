import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const Button = styled.button`
  color: #f00;
`;

test('it works', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});
