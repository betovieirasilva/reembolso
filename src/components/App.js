import React from 'react';

import BarraMenu from './BarraMenu'
import Categoria from './Categoria'
import Reembolso from './Reembolso'

import './App.css';

class App extends React.Component {

  render() {
    return (
        <div>
            <BarraMenu />
            {/*<Categoria />*/}
            <Reembolso />
        </div>
    )
  }
}

export default App
