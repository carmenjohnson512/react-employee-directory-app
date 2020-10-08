import React from 'react';
import './App.css';
import data from "./userData";
import Directory from './Components/EmployeeDirectory.container';
import dataColumns from './Components/EmployeeDirectory.container';

function App() {
  return (
    <Directory keyField={'username'} data={ data } columns={ dataColumns }/>
  );
}

export default App;
