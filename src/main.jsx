import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootsFund from './Components/Pages/RootsFund'
import BloodBank from './Components/Pages/BloodBank'
import Home from './Components/Pages/Home'
import { ThemeProvider } from './Components/components/ThemeProvider'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roots-fund" element={<RootsFund />} />
          <Route path="/blood-bank" element={<BloodBank />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)