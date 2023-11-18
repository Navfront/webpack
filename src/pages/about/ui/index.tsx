import { FC } from 'react'
import { Link } from 'react-router-dom'

export const AboutPage: FC = () => {
  return (
    <section>
      <Link to={'/'}>To Main Page</Link>
      <h1>About page</h1>
    </section>
  )
}
