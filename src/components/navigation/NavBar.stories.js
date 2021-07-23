import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as NavBarItemStories from './NavBarItem.stories';

import NavBar from './NavBar';

export default {
  component: NavBar,
  title: 'Navigation/NavBar',
  decorators: [story => <BrowserRouter>{story()}</BrowserRouter>],
};

const Template = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColour: 'light',
  bgClass: 'light',
  brandVariant: 'light',
  navBarItems: [
    { ...NavBarItemStories.Default.args },
    { id: '2', location: '/about', navText: 'About' },
    { id: '3', location: '/search', navText: 'Search' },
  ],
};
