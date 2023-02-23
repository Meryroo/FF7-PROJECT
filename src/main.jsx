import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { PageContexProvider } from './context/PageContext';
import { UserContexProvider } from './context/UserContext';
import About from './pages/About';
import Bestiary from './pages/Bestiary';
import Data from './pages/Data';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectecRoute from './ui-components/ProtectecRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContexProvider>
      <BrowserRouter basename="/">
        <UserContexProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/bestiary" element={<Bestiary />} />
              <Route
                path="/data"
                element={
                  <ProtectecRoute>
                    <Data />
                  </ProtectecRoute>
                }
              />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </UserContexProvider>
      </BrowserRouter>
    </PageContexProvider>
  </React.StrictMode>,
);
