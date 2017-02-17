import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Categoria
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Categoria" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Descrição</ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControl componentClass="textarea" placeholder="Descrição" />
                    </Col>

                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <ButtonToolbar>
                            <Button bsStyle="primary">Salvar</Button>
                            <Button>Excluir</Button>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
  }
}

export default App
