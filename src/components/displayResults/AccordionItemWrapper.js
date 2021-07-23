import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionItem from './AccordionItemContent';

export default function AccordionItemWrapper({ eventKey, displayString, accordionClassName, cardClassName, items }) {
  return (
    <Card className={cardClassName}>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey} className={accordionClassName}>
        {displayString}
      </Accordion.Toggle>
      {items.map((item) => (
        <AccordionItem eventKey={eventKey} item={item} key={item.id} />
      ))}
    </Card>
  );
}

AccordionItemWrapper.propTypes = {
  eventKey: PropTypes.string.isRequired,
  displayString: PropTypes.string.isRequired,
  cardClassName: PropTypes.string,
  accordionClassName: PropTypes.string,
  items: PropTypes.arrayOf(AccordionItem.propTypes.item).isRequired,
};