import React from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { ContainerMain } from './components/styles/styles'

function App() {
  return (
    <ContainerMain>
      <Header />
      <Content />
    </ContainerMain>
  )
}

export default App