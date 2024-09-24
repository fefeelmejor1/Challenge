import React from 'react';
import './App.css';
import MoviesContextProvider from './components/contexts/MoviesContext';
import Home from './components/screens/Home';

export default function App() {
  return (
    <MoviesContextProvider>
      <Home />
    </MoviesContextProvider>
  );
}

