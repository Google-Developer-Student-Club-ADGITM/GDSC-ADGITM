import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Main = () => {
    const fields = {
        width: "100%",
        paddingRight: "3rem",
        paddingLeft: "2rem",

    }

    const fieldstypes = {
        width: "85%",
        height: "20rem",
        marginLeft: "10%",
        marginBottom: "30%",
        boxShadow: " 10px 10px 8px gray"
    }

    const scrollmenu = {
        backgroundColor: "#333",
        overflow: "auto",
        // whiteSpace: "n   owrap",
    }

    const scrollmenuA = {
        display: "inline-block",
        color: "white",
        textAlign: "center",
        padding: "14px",
        textDecoration: "none"
    }

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // function changeImage(filename){
    //     let img = document.querySelector("#bannerImage");
    //     // img.setAttribute("src", filename);
    // }
    const [src, setSrc] = useState("/aim.png")



    return (
        <div>
            {/* <img className='' src='GDSCbg1.png'/> */}
            {/* Developer Student Clubs ADGITM */}
            <section className=" body-font">
                <div className="container mx-auto flex px-5 py-16 md:py-36 items-center justify-center flex-col">
                    <div className="flex flex-wrap -m-4 justify-center ">
                        <div className="p-4 md:w-1/2 md:mr-96">
                            <div className="p-6">
                                <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">Developer Student Clubs
                                    <br />
                                    ADGITM
                                </h1>
                                <h2 className="tracking-widest text-xs flex title-font font-medium text-gray-600 mb-1">Powered By <img className='w-12 justify-center items-center' src='google1.png' /> </h2>
                                <p className="leading-relaxed mb-3 text-gray-800">The Google Developer student clubs ADGITM is a community creating a peer to peer environment by bringing developers under one roof so that we connect, learn and grow by implementing projects that solve real-world problems!We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.</p>
                                <div className="flex items-center flex-wrap ">
                                    <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 focus:outline-none rounded-2xl text-lg ">Collaborate on Projects</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our aim  */}
            <section id='blog' className="text-gray-800 body-font ">
                <div className="container mx-auto flex px-5 py-16 md:py-36 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font font-semibold sm:text-4xl text-3xl mb-4  text-gray-900">OUR AIM</h1>
                        <p className="mb-8 mt-8 leading-relaxed">At Developer Student Club, ADGITM we believe imagination has no limits and we can make almost anything possible through technology. We want to create leaders by empowering them to think out of the box.</p>
                        <div className="flex justify-center">

                        </div>
                    </div>

                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="aim.png" />

                    <a href='https://gdsc.community.dev/dr-akhilesh-das-gupta-institute-of-technology-and-management-delhi/' target="_blank"><button className="text-white w-40 inline-flex bg-blue-500 border-0 py-1 px-12 focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">JOIN US</button></a>
                </div>
            </section>


            {/* BLOGS AND RESOURCES  */}
            <section id='blog' className="text-gray-800 bg-gray-200 body-font ">
                <div className="container mx-auto flex px-5 py-16 md:py-36 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font font-semibold sm:text-4xl text-3xl mb-4  text-gray-900">BLOGS AND RESOURCES</h1>
                        <p className="mb-8 mt-8 leading-relaxed">The main purpose of a blog is to connect you to the relevant audience. It is to boost your traffic and send quality leads to your website/projects. In our community, we believe to make projects collectively and spread word by writing blogs or open source your projects.
                            <br />
                            If you think you can write a blog, we are free to publish on our GDSC medium feed. Please contact us on our email.</p>
                        <div className="flex justify-center">

                        </div>
                    </div>

                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center opacity-25 rounded" alt="hero" src="blog.png" />

                    <button href='' className="text-white inline-flex bg-blue-500 border-0 py-1 px-12 focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">Know More</button>
                </div>
            </section>



            {/* PROJECT */}
            <section id='project' className="text-gray-800 body-font ">
                <div className="container mx-auto flex px-5 py-16 md:py-36 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font font-semibold sm:text-4xl text-3xl mb-4  text-gray-900">PROJECTS</h1>
                        <p className="mb-8 mt-8 leading-relaxed">Projects provide an organized way of bringing about some kind of change such as developing a new product, building a bridge across a problem, and finding a cure for diseases. Without projects, businesses and our whole way of life would stagnate as we simply maintained the status quo. So, we want you to get your hands dirty. We will be having a curated list of product so that you can turn theory into practice.</p>
                        <div className="flex justify-center">

                        </div>
                    </div>

                    <img className="lg:w-1/6 md:w-1/6 w-2/6 mb-10 object-cover object-center rounded" alt="hero" src="project.png" />

                    <button href='' className="text-white inline-flex bg-blue-500 border-0 py-1 px-12 focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">Know More</button>
                </div>
            </section>




            {/* Field Work  */}
            <section className="text-gray-600 bg-gray-200 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">FIELDS WE WORK IN</h1>

                    </div>


                    <div className="flex flex-wrap" style={fields}>

                        <div className="xl:w-1/4 md:w-1/2 ">
                            <div className="border bg-blue-400 border-gray-200 rounded-3xl" style={fieldstypes} >

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">AI/ML & DATA SCIENCE</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to automatically learn and improve from experience without being explicitly programmed.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-red-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">WEB DEVELOPMENT</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-yellow-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">ANDROID DEVELOPMENT</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-green-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">CLOUD COMPUTING</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.</p>
                            </div>
                        </div>



                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-blue-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">INFO SECURITY</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">With exponential rise in digital world, the attacks are rising more and more. Learn how to keep your applications safe in this world of information technology.
                                    Codelabs</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-red-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">UI/UX DESIGNING</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">It is the art of creating visual content for communication purposes. In this domain, We provide designing team who with their apex of creativity immerse themselves into fantasy and fiction and pour out the elegance.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-yellow-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">CONTENT</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">For an organization, content can be anything from an engineering white paper to a press release to even a post made by the company on social media. It is vital for an organization to understand the importance of content and take actions for ownership.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4    md:w-1/2 ">
                            <div className="border bg-green-400 border-gray-200 rounded-3xl" style={fieldstypes}>

                                <h6 className="text-lg text-gray-900 text-center font-bold title-font m-3">MANAGEMENT</h6>
                                <p className="leading-relaxed h-64 text-base text-center rounded-b-3xl bg-white p-1">For the growth of all and to bring chances for all the domains to excel and also develop teamwork skills, we provide managerial domain to increase the productivity of all our members by being the face of this society and bring forth new projects.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>




            {/* Team Leads  */}
            <section id='project' className="text-gray-800 body-font ">
                <div className="container mx-auto flex  py-16 md:py-36 items-center justify-center flex-col">
                    <div className="text-center w-full">
                        <h1 className="title-font font-semibold sm:text-4xl text-3xl mb-16  text-gray-900">TEAM LEADS</h1>
                        <div style={scrollmenu} className="scrollmenu whitespace-nowrap mb-16">
                            <a style={scrollmenuA} href="#naman12">President</a>
                            <a style={scrollmenuA}>General Seretary</a>
                            <a style={scrollmenuA} href="#contact">Web</a>
                            <a style={scrollmenuA} href="#about">App</a>
                            <a style={scrollmenuA} href="#support">AI-ML</a>
                            <a style={scrollmenuA} href="#blog">Cloud</a>
                            <a style={scrollmenuA} href="#tools">Info Security</a>
                            <a style={scrollmenuA} href="#base">UI/UX</a>
                            <a style={scrollmenuA} href="#custom">Content</a>
                            <a style={scrollmenuA} href="#more">Management</a>
                        </div>
                        {/* <img id='naman12' src={src} onClick={function () {
                            setSrc("/blog.png")
                        }}
                        /> */}
                    </div>
                    {/* </div> */}
                    {/* <img id='1' className="hidden lg:w-1/6 md:w-1/6 w-2/6 mb-10 object-cover object-center rounded" alt="hero" src="project.png" /> */}
                    <button href='' className="text-white inline-flex bg-blue-500 border-0 py-1 px-12 focus:outline-none hover:bg-blue-600 rounded-full text-base md:mt-0">Know More</button>
                </div>
            </section>



        </div>
    )
}

export default Main
