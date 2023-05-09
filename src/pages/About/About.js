import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function About() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("=============location: ", { location })

    
  return (
    <div>
      <h2>About</h2>
      <button 
        type="button"
        onClick={() => {
          navigate('/')
        }}
      
      >
        Go back Home        
      </button>

      <Outlet />
    </div>
  )
}

export default About
