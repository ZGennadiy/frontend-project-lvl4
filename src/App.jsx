import React from 'react';
import {
  BrowserRouter, Route, Routes, Outlet, Navigate, useLocation,
} from 'react-router-dom';
import {
  LoginPage, MainPage, NotFoundPage, PAGES_ROUTES,
} from './Presentation/pages';
import { AuthProvider } from './context/Auth';
import customHooks from './hooks/index.js';

function PrivatePage({ isLoginPage = false }) {
  const { useAuth } = customHooks;
  const auth = useAuth();

  const location = useLocation();

  if (isLoginPage) {
    const { pathname } = location.state.from || { pathname: PAGES_ROUTES.main };

    return auth.user ? <Navigate to={pathname} /> : <Outlet />;
  }

  return auth.user ? <Outlet /> : <Navigate to={PAGES_ROUTES.login} />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES_ROUTES.main} element={<PrivatePage />}>
            <Route element={<MainPage />} />
          </Route>
          <Route path={PAGES_ROUTES.notFound} element={<NotFoundPage />} />
          <Route path={PAGES_ROUTES.login} element={<PrivatePage isLoginPage />}>
            <Route element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
