import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavBarItem from './NavBarItem';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar({ textColour, bgClass, brandVariant, navBarItems }) {
  const history = useHistory();

  const onSelect = (location) => {
    history.push(location)
  }

  return (
    <Navbar bg={bgClass} variant={textColour}>
      <Navbar.Brand as={Button} variant={brandVariant} href='/'>
        <img
          src="https://react-bootstrap.github.io/logo.svg"
          width="30"
          height="30"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav defaultActiveKey="/" variant="pills" onSelect={onSelect} className="me-auto">
        {navBarItems.map((item) => (
          <NavBarItem key={item.id} id={item.id} location={item.location} navText={item.navText} />
        ))}
      </Nav>
    </Navbar>
  );
}

NavBar.propTypes = {
  /** The colour of the text */
  textColour: PropTypes.oneOf(['light', 'dark']),
  /** The colour of the navbar */
  bgClass: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'success', 'warning', 'danger', 'link']),
  /** The colour of the button branding */
  brandVariant: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'success', 'warning', 'danger', 'link']),
  /** The list of nav items */
  navBarItems: PropTypes.arrayOf(PropTypes.shape(NavBarItem.propTypes)).isRequired,
};

NavBar.defaultProps = {
  textColour: 'light',
  bgClass: 'light',
  brandVariant: 'light',
};
