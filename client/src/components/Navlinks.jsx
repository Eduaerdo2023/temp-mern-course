import React from 'react'
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import { useDashboardContext } from '../pages/DashboardLayout'


const Navlinks = ({isBigSidebar}) => {
  const {toggleSidebar, user}=useDashboardContext()
  const { role } = user
  return (
    <div className="nav-links">
    {links.map( link => {
      const { text, path, icon } = link
      if (path === 'admin' && role !== 'admin') return
      return (
        <div key={text}>
          <NavLink  to={path}  className='nav-link' 
          onClick={isBigSidebar? null: toggleSidebar} end>
            <span className="icon">
              {icon}
            </span>
            {text}
          </NavLink >
        </div>
      )
    })}
  </div>
  )
}

export default Navlinks
