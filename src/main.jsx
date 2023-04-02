import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyle'
import { Routes } from './routes/index'
import { FavoriteProvider } from './hooks/FavoriteContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteProvider>
      <GlobalStyles />
      <Routes />
    </FavoriteProvider>
  </React.StrictMode>
)
