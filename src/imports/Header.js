import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'

class Header extends Component {

    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    render() {
        return(
            <Navbar>
            <Nav onSelect={this.handleSelect.bind(this)}>
            <NavItem eventKey={1}>Home</NavItem>
            <NavItem eventKey={2}>Booking</NavItem>
            <NavItem eventKey={3} >Videos</NavItem>
            <NavItem eventKey={3} >Gallery</NavItem>
            <NavItem eventKey={3} >Our Team</NavItem>
            <NavItem eventKey={4} >Contact Us</NavItem> 
          </Nav>
          <Nav pullRight>
          <NavItem>WeirdShot Films</NavItem>
          </Nav>
          </Navbar>
        );
    }
}

export default Header;