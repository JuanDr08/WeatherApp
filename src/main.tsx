import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './modules/App'
import './css/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
