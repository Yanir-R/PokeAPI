import React from 'react';
import './App.css'
import { PokeDetails } from './components/PokeDetails';
import { PokeAPI } from './PokeAPI';


export const App: React.FC<any> = ({ }) => {
  return (
    <div className="App">
      <PokeAPI />
      <PokeDetails />
    </div>
  )
}



