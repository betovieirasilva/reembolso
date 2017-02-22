/**
 * Created by gilberto on 17/02/17.
 */
import React from 'react'

import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

//https://facebook.github.io/react/docs/forms.html#controlled-components
class Categoria extends React.Component {

    constructor() {
        super();
        this.state = {
            categoria: '',
            descricao: ''
        }
    }

    handleChange( event ) {
        const name = event.target.name;

        this.setState({[name]: event.target.value});
    }

    save() {
        //TODO: delegar ao Service o envio do dado para o backend
        console.log('BEAN: ' + JSON.stringify(this.state));
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="nome">
                    <Col componentClass={ControlLabel} sm={2}>
                        Nome da Categoria
                    </Col>
                    <Col sm={10}>
                        <FormControl name="categoria" type="text" placeholder="Categoria" value={this.state.categoria} onChange={this.handleChange.bind(this)} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="descricao">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Descrição</ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControl name="descricao" componentClass="textarea" placeholder="Descrição" value={this.state.descricao} onChange={this.handleChange.bind(this)} />
                    </Col>

                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" onClick={this.save.bind(this)}>Salvar</Button>
                            <Button>Excluir</Button>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default Categoria