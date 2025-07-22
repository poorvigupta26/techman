import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'
import Services from './pages/Services.tsx'

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/services",
        element:<Services/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
 <RouterProvider router={appRoutes}/>,
)
