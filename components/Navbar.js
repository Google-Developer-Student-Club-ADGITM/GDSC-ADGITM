import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const GDSCLOGO = {
    width: "50px",
  }
  const listitems = {
    marginRight: "33.5rem",
    // : "100%"
  }

  return (
    <div>
      {/* <header className="bg-white text-gray-600 sticky body-font top-0 ">
        <div className="bg-white shadow-lg container fixed mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='m' style={GDSCLOGO} src='GDSCLOGO.png' />
            <span className="ml-3 text-xl font-semibold">GDSC ADGITM</span>
          </a>
          <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href='' className="mr-14 py-2  font-semibold text-sm text-black hover:text-blue-600">HOME</a>
            <a href='' className="mr-14 py-2  font-semibold text-sm text-black hover:text-red-600">BLOG</a>
            <a href='' className="mr-14 py-2  font-semibold text-sm text-black hover:text-green-600">PROJECT</a>
            <a href='' className="mr-14 py-2 font-semibold text-sm text-black hover:text-yellow-500">TEAMS</a>
            <a href='' className="mr-12 py-2  font-semibold text-sm text-black hover:text-gray-400">CODE OF CONDUCT</a>
          </nav>
          <button href='' className="text-white w-40 inline-flex bg-blue-500 border-0 py-1 px-12 
    focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">JOIN US

          </button>
        </div>
      </header>  */}



      <header className="bg-white text-gray-600 sticky body-font top-0 ">
        <div >

          <nav >
            <section className="MOBILE-MENU flex lg:hidden my-5 pb-5 shadow-lg ">
              <Link href='/' className="flex title-font font-medium items-center text-gray-900  md:mb-0">
                <img className='m' style={GDSCLOGO} src='GDSCLOGO.png' />
                <span className="ml-3 text-xl font-semibold">GDSC ADGITM</span>
              </Link>
              <div
                className="HAMBURGER-ICON rounded bg-gray-800  space-y-2 px-1 py-1 mr-5 ml-auto"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav  shadow-2xl rounded-3xl" : "hideMenuNav"}>

                <div
                  className="CROSS-ICON animate-pulse bg-white absolute  top-0 right-0  px-5 "
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >

                  <svg
                    className="h-8 w-8 text-gray-800 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center mb-5 ">
                  <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-2">
                    <img className='m' style={GDSCLOGO} src='GDSCLOGO.png' />
                    <span className="ml-3 text-xl font-semibold">GDSC ADGITM</span>
                  </Link>
                  <li className="py-2 font-semibold text-sm text-black hover:text-blue-600">
                    <Link href="/">HOME</Link>
                  </li>
                  <li className="py-2 font-semibold text-sm text-black hover:text-red-600">
                    <Link href="/Skills">BLOG</Link>
                  </li>
                  <li className="py-2 font-semibold text-sm text-black hover:text-yellow-500">
                    <Link href="/Contact">PROJECT</Link>
                  </li>
                  <li className="py-2 font-semibold text-sm text-black hover:text-green-600">
                    <Link href="/Contact">TEAMS</Link>
                  </li>
                  <li className="py-2 font-semibold text-sm text-black hover:text-gray-400">
                    <Link href="/Contact">CODE OF CONDUCT</Link>
                  </li>
                  <button href='' className="text-white w-40 inline-flex bg-blue-500 border-0 mt-2 px-12 
    focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">JOIN US
                  </button>
                </ul>
              </div>
            </section>

            <ul className="Desktop-Menu hidden  lg:flex bg-white shadow-lg container fixed mx-auto   flex-wrap p-5 flex-col md:flex-row items-center">
              <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className='m' style={GDSCLOGO} src='GDSCLOGO.png' />
                <span className="ml-3 text-xl font-semibold">GDSC ADGITM</span>
              </Link>
              <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href='/' className="mr-14 py-2  font-semibold text-sm text-black hover:text-blue-600">HOME</Link>
                <Link href='/#blog' className="mr-14 py-2  font-semibold text-sm text-black hover:text-red-600">BLOG</Link>
                <Link href='/#project' className="mr-14 py-2  font-semibold text-sm text-black hover:text-yellow-500">PROJECT</Link>
                <Link href='/' className="mr-14 py-2 font-semibold text-sm text-black hover:text-green-600">TEAMS</Link>
                <Link href='/' className="mr-12 py-2  font-semibold text-sm text-black hover:text-gray-400">CODE OF CONDUCT</Link>
              </nav>
              <button href='/' className="text-white w-40 inline-flex bg-blue-500 border-0 py-1 px-12 
    focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">JOIN US
              </button>
            </ul>

            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 30vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
          </nav>

        </div>
      </header >
    </div>

  )

}

export default Navbar
