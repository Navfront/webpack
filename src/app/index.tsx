import { FC } from 'react'
import { Text } from '../shared/components/text'
import { Counter } from '../shared/components/counter'
import '../shared/styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '../pages/router'

export const App: FC = () => {
  return <RouterProvider router={router} />
}
