import { createBrowserRouter } from 'react-router-dom'
import { MainPage, SubPageOne, SubPageTwo } from './main'
import { AboutPage } from './about'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/one',
        element: <SubPageOne />
      },
      {
        path: '/two',
        element: <SubPageTwo />
      }
    ]
  },

  {
    path: '/about',
    element: <AboutPage />
  }
])
