import { FC } from 'react'
import { Text } from '../shared/components/text'
import { Counter } from '../shared/components/counter'
import '../shared/styles/global.css'

export const App: FC = () => {
  return (
    <>
      <Text>Hello Wolrd 123</Text>
      <Counter />
    </>
  )
}
