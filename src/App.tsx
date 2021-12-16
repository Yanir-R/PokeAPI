import React from 'react';
import './App.css'
import { PokeDetails } from './components/PokeDetails';
import { PokeGif } from './components/PokeGif';
import { PokeList } from './components/PokeList';
import { PokeAPI } from './PokeAPI';


export const App: React.FC<any> = ({ }) => {
  return (
    <div className="App">
      <PokeAPI />
      <PokeDetails />
    </div>
  )
}



