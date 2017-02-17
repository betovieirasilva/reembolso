/**
 * Created by gilberto on 17/02/17.
 */
import React from 'react'

import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

const RelatorioReembolso = () => (
    <Form horizontal>
        <FormGroup controlId="relatorio">
            <Col sm={2}></Col>
            <Col sm={10}>
                <ControlLabel>Taxi</ControlLabel>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Pendente</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>15/01/2017</td>
                        <td>R$ 150,00</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>17/01/2017</td>
                        <td>R$ 50,00</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>20/02/2017</td>
                        <td>R$ 30,00</td>
                        <td>Não</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </FormGroup>
    </Form>
)

export default RelatorioReembolso