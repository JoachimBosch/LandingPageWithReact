import { useState } from 'react'
import './App.css'
import NavBar from './assets/navbar'
import JumboTron from './assets/jumbotron'
import Cards from './assets/cards'
import Footer from './assets/footer'

function App() {

  return (
    
    <div className='container-fluid'>
      <NavBar />
      <JumboTron />
      <Cards />
      <Footer />
    </div>

  )
}

export default App
