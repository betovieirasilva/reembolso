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

const Categoria = () => (
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
)

export default Categoria