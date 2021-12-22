import React from 'react';
import './App.css'
import { PokeDetails } from './components/PokeDetails';
import { PokeAPI } from './PokeAPI';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const App: React.FC<any> = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={< PokeAPI />} />
          <Route path={'pokemon/:id'} element={<PokeDetails />} />
        </Routes>
      </Router>
    </div >
  )
}



