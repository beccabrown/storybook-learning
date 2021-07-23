import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import AccordionItemWrapper from './AccordionItemWrapper';

export default {
  component: AccordionItemWrapper,
  title: 'DisplayResults/BootstrapAccordion',
  decorators: [story => <Accordion>{story()}</Accordion>],
};

const Template = args => <AccordionItemWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  eventKey: '1',
  displayString: 'Accordion',
  items: [
    {
      displayString: 'Item 1',
      id: '1',
    },
    {
      displayString: 'Item 2',
      id: '2'
    }
  ],
};
