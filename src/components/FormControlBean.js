/**
 * Created by gilberto on 22/02/17.
 */
import React from 'react'
import { FormControl } from 'react-bootstrap';

class FormControlBean extends React.Component {

    inicializeBean(name, parent){
        if(!parent.state[name]) {
            parent.state[name] = ''
        }
    }

    render() {
        const parent = this.props.parent;
        const name = this.props.name;
        this.inicializeBean(name, parent);

        return <FormControl componentClass={this.props.componentClass} name={name} type="text" value={parent.state[name]} onChange={parent.handleChange.bind(parent)} />
    }
}

export default FormControlBean