import React, { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';

class MenuBar extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Navbar>
            </Fragment>
        );
    }
}

export default MenuBar;