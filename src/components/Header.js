import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">Home</Link>
    <div className="right menu">
      <Link to="/genres" className="item">Genres</Link>
      <Link to="/games" className="item">Games</Link>
    </div>
  </div>
)

export default Header