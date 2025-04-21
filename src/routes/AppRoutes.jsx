// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LotePage from '../estoque/LotePage';
import HomePage from '../main/HomePage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/estoque/lote" element={<LotePage />} />
  </Routes>
);
