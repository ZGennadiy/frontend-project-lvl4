import React from 'react';
import {
  BrowserRouter, Route, Routes, Outlet, Navigate,
} from 'react-router-dom';
import { LoginPage, MainPage, NotFoundPage } from './Presentation/pages';
import { AuthProvider } from './context/Auth';
import { useAuth } from './hooks/index.js';
import routes from './routes.js';

function PrivatePage() {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to={routes.loginPagePath()} />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivatePage />}>
            <Route element={<MainPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
