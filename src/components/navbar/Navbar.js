import React, { Component } from "react";
import Home from "../pages/Home";
import Yosho from "../pages/Yosho";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

import { Route, NavLink, HashRouter } from "react-router-dom";

export default class Navigation extends Component {
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
      <HashRouter>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="#"> ReactStrap </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/">
                  <Button color="dark"> Yosho </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/yosho">
                  <Button color="dark"> What we do </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/yosho">
                  <Button color="dark"> About Us </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/yosho" component={Yosho} />
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    );
  }
}
