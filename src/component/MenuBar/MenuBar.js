import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


class MenuBar extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Echo By Emily</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/intro">Intro</Nav.Link>
                            <Nav.Link href="/chat">Chat</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default MenuBar;