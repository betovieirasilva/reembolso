/**
 * Created by gilberto on 17/02/17.
 */
import React from 'react'

import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import FormComponentBean from './FormComponentBean';
import FormControlBean from './FormControlBean';

class Reembolso extends FormComponentBean {
    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="custo">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Custo</ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControlBean name="custo" parent={this} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="data">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Data</ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControlBean name="data" parent={this} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="categoria">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Categoria</ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControlBean name="categoria" componentClass="select" parent={this}>
                            <option value="select">A</option>
                            <option value="other">...</option>
                        </FormControlBean>
                    </Col>
                </FormGroup>
                <FormGroup controlId="observacao">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Observação</ControlLabel>
                    </Col>
                    <Col sm={10}>
                        <FormControlBean componentClass="textarea" name="observacao" parent={this} />
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

export default Reembolso