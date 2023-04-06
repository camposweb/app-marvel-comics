import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <script defer src={import.meta.env.VITE_API_AUTO_COMPLETE}></script>
    <App />
  </React.StrictMode>,
)
