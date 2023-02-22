import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { MachinePage } from './components/MachinePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes to automatically redirect users */}
          <Route path="change" element={<MachinePage/>}/>
          <Route path="" element={<Navigate to="/change"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
