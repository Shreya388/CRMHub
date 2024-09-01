import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Topbar from './components/Topbar.tsx';
import { NextUIProvider } from '@nextui-org/react';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
    <Topbar />
    </main>
    <App />
    </NextUIProvider>
  </StrictMode>,
)
