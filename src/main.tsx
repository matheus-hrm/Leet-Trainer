import './index.css'
import React    from 'react'
import ReactDOM from 'react-dom/client'
import App      from './pages/HomePage.tsx'
import ErrorPage    from './pages/errorPage.tsx'
import ProblemsPage from './pages/ProblemPage.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from './components/theme-provider.tsx'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/code",
    element: <ProblemsPage />,
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
