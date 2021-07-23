import React from 'react';

import MUIAccordion from './MaterialUIAccordion';

export default {
  component: MUIAccordion,
  title: 'DisplayResults/MUIAccordion',
};

const Template = args => <MUIAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      heading: 'Accordion 1',
      content: 'Item 1',
      id: '1',
    }
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  items: [
    ...Default.args.items,
    {
      heading: 'Accordion 2',
      content: 'Item 2',
      id: '2'
    }
  ]
}
