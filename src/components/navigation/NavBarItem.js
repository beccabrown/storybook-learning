import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBarItem({ id, location, navText }) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={location}>{navText}</Nav.Link>
    </Nav.Item>
  );
}

NavBarItem.propTypes = {
  /** Id of the nav item */
  id: PropTypes.string.isRequired,
  /** href to push to */
  location: PropTypes.string,
  /** Text to display */
  navText: PropTypes.string,
};

NavBarItem.defaultProps = {
  location: null,
  navText: null
}
