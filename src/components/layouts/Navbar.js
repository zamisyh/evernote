import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div data-theme="dark">
        <div className="navbar bg-base-100">
            <div className="flex-1 text-white">
                <Link to="/" className="text-xl normal-case btn btn-ghost">Notebook</Link>
            </div>
            <div className="flex-none text-white">
                <ul className="p-0 menu menu-horizontal">
                    <li>
                        <NavLink to="/favorites">
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar