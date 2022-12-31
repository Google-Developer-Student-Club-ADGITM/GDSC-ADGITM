import React from 'react'

const Main = () => {
    return (
        <div>
            <section className="text-gray-800 body-font ">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font font-semibold sm:text-4xl text-3xl mb-4  text-gray-900">OUR AIM</h1>
                        <p className="mb-8 mt-8 leading-relaxed">At Developer Student Club, ADGITM we believe imagination has no limits and we can make almost anything possible through technology. We want to create leaders by empowering them to think out of the box.</p>
                        <div className="flex justify-center">

                        </div>
                    </div>

                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="aim.png" />

                    <button href='' className="text-white w-40 inline-flex bg-blue-500 border-0 py-1 px-12 focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">JOIN US</button>
                </div>
            </section>
        </div>
    )
}

export default Main
