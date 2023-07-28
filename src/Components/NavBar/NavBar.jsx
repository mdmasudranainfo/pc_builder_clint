import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className=" bg-primary ">
      <div className="navbar container mx-auto">
        <div className="navbar-start first-letter:">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">PC Builder</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories </summary>
                <ul className="p-2">
                  <li>
                    <Link href="/category">CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href="/category">Motherboard</Link>
                  </li>

                  <li>
                    <Link href="/category">RAM</Link>
                  </li>

                  <li>
                    <Link href="/category">Power Supply Unit</Link>
                  </li>

                  <li>
                    <Link href="/category">Storage Device</Link>
                  </li>

                  <li>
                    <Link href="/category">Monitor</Link>
                  </li>

                  <li>
                    <Link href="/category">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/category">Others</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
