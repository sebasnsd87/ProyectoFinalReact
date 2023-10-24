import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  
  const greeting = "Bienvenidos a Ferreteria Emilio"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App

