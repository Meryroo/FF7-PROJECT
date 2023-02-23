import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { PageContexProvider } from './context/PageContext';
import About from './pages/About';
import Bestiary from './pages/Bestiary';
import Data from './pages/Data';
import Home from './pages/Home';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContexProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bestiary" element={<Bestiary />} />
            <Route path="/data" element={<Data />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageContexProvider>
  </React.StrictMode>,
);
