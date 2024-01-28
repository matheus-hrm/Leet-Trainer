import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  App  from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import ErrorPage from './components/error/errorPage.tsx'
import Questions from './components/code/Questions.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/code",
    element: <Questions />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
