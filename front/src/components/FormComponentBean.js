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

    fetchPost = (json) => {
        const obj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: json
        }

        return fetch('http://localhost:9000/api/categorias', obj)
            .then(res => res.json())
            .then(result => {
                return result
            })
            .catch(function (err) {
                console.error(err)
                return undefined
            })
    }

    fetchGet = () => {
        const obj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        return fetch('http://localhost:9000/ping')
            //.then(res => res.json())
            .then(result => {
                return result
            })
            .catch(function (err) {
                console.error(err)
                return undefined
            })
    }



    save() {
        //TODO: delegar ao Service o envio do dado para o backend
        console.log('BEAN: ' + JSON.stringify(this.state));
        //this.fetchPost(this.state);

        console.log('GET: ' + this.fetchGet());
    }
}

export default FormComponentBean