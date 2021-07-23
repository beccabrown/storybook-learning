import React from 'react';

import NavBarItem from './NavBarItem';

export default {
  component: NavBarItem,
  title: 'Navigation/NavBarItem',
};

const Template = args => <NavBarItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  navText: 'Home',
  location: '/'
};

