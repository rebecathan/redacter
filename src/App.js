import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from "./componentes/row"
import Column from './componentes/column';

function App() {
  return (
    <div>
      <Row></Row>
      <Column></Column>
      <Column></Column>
      <Row></Row>
      <Column></Column>
      <Column></Column>
    </div>
  );
}

export default App;