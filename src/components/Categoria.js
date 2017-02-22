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
        this.state = { value: 'Teste'}
    }

    handleChange( event ) {
        this.setState({value: event.target.value});
    }

    save() {
        //TODO: delegar ao Service o envio do dado para o backend
        console.log('BEAN: ' + this.state.value);
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="nome">
                    <Col componentClass={ControlLabel} sm={2}>
                        Nome da Categoria
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Categoria" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="descricao">
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