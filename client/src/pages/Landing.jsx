import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'

import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
            lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores iste harum eum corporis tenetur asperiores dolor, placeat aut voluptatum omnis beatae sit error minus in, quas nisi? Voluptate, facere soluta.
          </p>
          <Link to='register' className='btn register-link'>Register</Link>
          <Link to='login' className='btn register-link'>Login / Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>

      
    </Wrapper>
  )
}

export default Landing
