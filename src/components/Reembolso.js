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

const Reembolso = () => (
    <Form horizontal>
        <FormGroup controlId="custo">
            <Col componentClass={ControlLabel} sm={2}>
                Custo
            </Col>
            <Col sm={10}>
                <FormControl type="text" placeholder="Custo" />
            </Col>
        </FormGroup>
        <FormGroup controlId="data">
            <Col componentClass={ControlLabel} sm={2}>
                Data
            </Col>
            <Col sm={10}>
                <FormControl type="text" placeholder="01/02/2017" />
            </Col>
        </FormGroup>
        <FormGroup controlId="observacao">
            <Col componentClass={ControlLabel} sm={2}>
                <ControlLabel>Observação</ControlLabel>
            </Col>
            <Col sm={10}>
                <FormControl componentClass="textarea" placeholder="Observação" />
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

export default Reembolso