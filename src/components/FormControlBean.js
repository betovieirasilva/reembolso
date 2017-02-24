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
        const {
            ...props
        } = this.props;

        const parent = this.props.parent;
        const name = this.props.name;
        const children = this.props.children;
        this.inicializeBean(name, parent);

        //TODO: definir {...props} para egar os recursos do pai
        return <FormControl componentClass={this.props.componentClass}  name={name} type="text" value={parent.state[name]} onChange={parent.handleChange.bind(parent)}>{children}</FormControl>
    }
}

export default FormControlBean