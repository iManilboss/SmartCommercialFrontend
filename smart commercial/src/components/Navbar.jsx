import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <li><a href="">Smart Commercial</a></li>
      <div style={{display: 'flex', width: '40%', justifyContent: 'space-between'}}>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact Us</a></li>
      </div>
    </nav>
  )
}

export default Navbar