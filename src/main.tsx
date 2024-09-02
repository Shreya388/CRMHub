import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react';
import './index.css'
import { Sidebar } from 'react-pro-sidebar';
import Divbar from './components/sidebar.tsx';
import Login from './pages/login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
    {/* <main className="light text-foreground bg-background ">
    <div className="flex ... h-screen">
        <div className="w-1/4 h-screen">
          <Divbar />
        </div>
        <div className="w-full">
        <App />
        </div>
      </div>
    </main> */}
    <Login />
    </NextUIProvider>
  </StrictMode>,
)
