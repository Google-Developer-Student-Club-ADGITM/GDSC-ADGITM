import React from 'react'

const Navbar = () => {
  const GDSCLOGO = {
    width: "50px",
  }

  return (
    <div>
      <header className="bg-white text-gray-600 sticky body-font top-0 ">
        <div className="bg-white shadow-lg container fixed mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='m' style={GDSCLOGO} src='GDSCLOGO.png' />
            <span className="ml-3 text-xl font-semibold">GDSC ADGITM</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
      </header>
    </div>
  )
}

export default Navbar
