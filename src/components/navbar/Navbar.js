import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Navigation extends React.Component {
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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="#"> ReactStrap </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#"> Yosho </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"> What We Do </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"> About Us </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
