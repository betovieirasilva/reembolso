import React from 'react';

import BarraMenu from './BarraMenu'
import Categoria from './Categoria'

import './App.css';

class App extends React.Component {

  render() {
    return (
        <div>
            <BarraMenu />
            <Categoria />
        </div>
    )
  }
}

export default App
