import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, NotFoundPage } from './Presentation/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
