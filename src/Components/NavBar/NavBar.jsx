import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const NavBar = () => {
  const { data: session } = useSession()
  console.log(session)

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
                <a>Categories</a>
                <ul className="p-2 z-40">
                  <li>
                    <Link href="/categories/CPU_Processor">
                      CPU / Processor
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/Motherboard">Motherboard</Link>
                  </li>

                  <li>
                    <Link href="/categories/RAM">RAM</Link>
                  </li>

                  <li>
                    <Link href="/categories/Power_Supply_Unit">
                      Power Supply Unit
                    </Link>
                  </li>

                  <li>
                    <Link href="/categories/Storage_Device">
                      Storage Device
                    </Link>
                  </li>

                  <li>
                    <Link href="/categories/Monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/categories/Others  ">Others</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/pcbuilder">Pc Builder</Link>
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
                <ul className="p-2 z-40">
                  <li>
                    <Link href="/categories/CPU_Processor">
                      CPU / Processor
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/Motherboard">Motherboard</Link>
                  </li>

                  <li>
                    <Link href="/categories/RAM">RAM</Link>
                  </li>

                  <li>
                    <Link href="/categories/Power_Supply_Unit">
                      Power Supply Unit
                    </Link>
                  </li>

                  <li>
                    <Link href="/categories/Storage_Device">
                      Storage Device
                    </Link>
                  </li>

                  <li>
                    <Link href="/categories/Monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/categories/Others  ">Others</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/pcbuilder">Pc Builder</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {session?.user?.email ? (
            <button onClick={() => signOut()} className="btn">
              Log Out
            </button>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
