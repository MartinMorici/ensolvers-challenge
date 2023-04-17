import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NotesProvider from './context/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
)
