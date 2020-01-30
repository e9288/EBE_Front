import React, { Fragment } from 'react';
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import { Sidebar } from 'react-bootstrap-sidebar';

const SideBar = require('react-bootstrap-sidebar');
class MenuBar extends React.Component {
    render() {
        return (
            <Fragment>
                <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                    <Nav>
                      <NavItem href="#">Link 1</NavItem>
                      <NavItem href="#">Link 2</NavItem>
                      <NavItem href="#">Link 3</NavItem>
                      <NavItem href="#">Link 4</NavItem>
                    </Nav>
                </Sidebar>
                
                <Navbar expand="sm" variant="light" bg="light">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Navbar>
            </Fragment>
        );
    }
}

export default MenuBar;