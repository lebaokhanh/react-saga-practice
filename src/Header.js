import React, {useState} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {
  useRouteMatch,
  useHistory,
  useLocation
} from "react-router-dom";
import { routes } from './routes';
import _ from 'lodash';

const isActive = (currentUrl, comparedUrl) => {
  return _.isEqual(comparedUrl, currentUrl) ? 'active' : '';
}

const renderNavBarLink = (currentPath) => {
  return _.map(routes, (route, index) => (
    <NavItem key={index}>
      <NavLink
        className={isActive(currentPath, route.path)}
        href={route.path}
      >
        {route.label}
      </NavLink>
    </NavItem>
  ))
}

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {renderNavBarLink(pathname)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
