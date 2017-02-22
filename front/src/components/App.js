import React from 'react';

import BarraMenu from './BarraMenu'
import Categoria from './Categoria'
import Reembolso from './Reembolso'
import RelatorioReembolso from './RelatorioReembolso'

import './App.css';

class App extends React.Component {

  render() {
    return (
        <div>
            <BarraMenu />
            <div id="content"></div>
        </div>
    )
  }
}

export default App
