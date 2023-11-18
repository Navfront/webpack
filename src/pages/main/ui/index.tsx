import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const MainPage: FC = () => {
  return (
    <section>
      <h1>Main Page</h1>
      <Link to={'/one'}>Sub1</Link>
      <Link to={'/two'}>Sub2</Link>
      <Link to={'/about'}>To About Page</Link>
      <Outlet />
    </section>
  )
}
