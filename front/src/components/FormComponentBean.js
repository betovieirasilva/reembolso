/**
 * Created by gilberto on 22/02/17.
 */
import React from 'react'

class FormComponentBean extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    handleChange( event ) {
        const name = event.target.name;

        this.setState({[name]: event.target.value});
    }

    save() {
        //TODO: delegar ao Service o envio do dado para o backend
        console.log('BEAN: ' + JSON.stringify(this.state));
    }
}

export default FormComponentBean