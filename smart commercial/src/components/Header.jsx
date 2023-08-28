import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <section className="hero">
        <h1>Revitalize Your Space</h1>
        <p>Smart Commercial Enterprises: Elevating Your Space</p> 
        <button className="cta">View Services</button>
      </section>
    </header>
  )
}

export default Header