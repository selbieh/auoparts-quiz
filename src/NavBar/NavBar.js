import Logo from "./Logo/Logo"

import {NavLink} from "react-router-dom"

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 } from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Logo className="NavbarBrand"/>


          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          
            <Nav className="ml-auto" tabs>
            
              <NavItem >
              <NavLink  to="/" className="nav-link " exact >Home</NavLink>  
              </NavItem>
              <NavItem>
              <NavLink  to="/aboutUs" className="nav-link">aboutUs</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}