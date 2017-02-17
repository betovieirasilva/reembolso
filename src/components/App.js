import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import './App.css';

class App extends React.Component {

  render() {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Reembolso</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Opções" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Categorias</MenuItem>
                            <MenuItem eventKey={3.2}>Reembolso</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Relatório</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Ajuda</NavItem>
                        <NavItem eventKey={2} href="#">Gilberto</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
  }
}

export default App
