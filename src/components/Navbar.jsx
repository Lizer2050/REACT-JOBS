import React from 'react'
import logo from '../assets/images/logo.png'
import calasset from '../assets/images/calasset.png'
import {NavLink} from 'react-router-dom' // importing NavLink tag


const Navbar = () => {

  // Creating a function for the Link style
  const linkClass = ({isActive}) => isActive ? 'bg-[#f5a625] text-white hover:bg-[#f9dc23] hover:text-white rounded-md px-3 py-2': 'text-[#f5a625] hover:bg-[#f9dc23] hover:text-white rounded-md px-3 py-2'


  return (
    <nav className="bg-white  border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-[60px] w-auto"
                src={calasset}
                alt="Cal Asset"
              />
              {/* <span className="hidden md:block text-[#f5a625] text-2xl font-bold ml-2"
                >React Jobs</span
              > */}
            </NavLink>
            
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  // Previous class: className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home 
                </NavLink>
                
                <NavLink
                  to="/jobs" ///jobs
                  className={linkClass}
                  >Products</NavLink>
                
                <NavLink
                  to="/add-job" ///add-job
                  className={linkClass}
                  >Log In</NavLink>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar





{/* [#f9dc23] - Yellow*/}

{/* f5a625 - Orange */}