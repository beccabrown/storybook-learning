import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccordionItem({ eventKey, item }) {
  return (
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>
        {item.displayString}
      </Card.Body>
    </Accordion.Collapse>
  );
}

AccordionItem.propTypes = {
  eventKey: PropTypes.string.isRequired,
  item: PropTypes.shape({
    displayString: PropTypes.string,
    id: PropTypes.string,
  }),
};