import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Login, 
  Register,
} from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/aluno/get" component={ () => <Navigate to="/login" /> } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    </Routes>
    </BrowserRouter>

  );
}

export default App;