import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardHeade from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardHeade />
  </StrictMode>,
)
