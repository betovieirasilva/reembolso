/**
 * Created by gilberto on 17/02/17.
 */
import React from 'react'
import ReactDOM from 'react-dom';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Categoria from './Categoria';
import Reembolso from './Reembolso';
import RelatorioReembolso from './RelatorioReembolso';

class BarraMenu extends React.Component {

    constructor(){
        super();
        this.state = {lastMenu: undefined}
    }

    hideContentMenu() {
        ReactDOM.unmountComponentAtNode(document.getElementById('content'))
    }

    showContentMenu( item ) {
        this.hideContentMenu()
        ReactDOM.render(item, document.getElementById('content'))
    }

    render() {
        return (
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
                            <MenuItem onClick={() => this.showContentMenu(<Categoria />)}>Categorias</MenuItem>
                            <MenuItem onClick={() => this.showContentMenu(<Reembolso />)}>Reembolso</MenuItem>
                            <MenuItem divider/>
                            <MenuItem onClick={() => this.showContentMenu(<RelatorioReembolso />)}>Relatório</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Ajuda</NavItem>
                        <NavItem eventKey={2} href="#">Gilberto</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default BarraMenu