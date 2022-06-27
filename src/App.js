import React from 'react';
import './style.css';
import Login from './Component/Login.js';
import Content from './Component/Content.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}
