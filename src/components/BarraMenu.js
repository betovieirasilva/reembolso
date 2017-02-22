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

        if (item === 'categoria') {
            ReactDOM.render(<Categoria />, document.getElementById('content'))
        } else if (item === 'reembolso') {
            ReactDOM.render(<Reembolso />, document.getElementById('content'))
        } else if (item === 'relatorio') {
            ReactDOM.render(<RelatorioReembolso />, document.getElementById('content'))
        }
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
                            <MenuItem onClick={() => this.showContentMenu('categoria')}>Categorias</MenuItem>
                            <MenuItem onClick={() => this.showContentMenu('reembolso')}>Reembolso</MenuItem>
                            <MenuItem divider/>
                            <MenuItem onClick={() => this.showContentMenu('relatorio')}>Relatório</MenuItem>
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