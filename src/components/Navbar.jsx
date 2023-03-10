import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    // useState hook to store the state of the hamburger menu
    const [isOpen, setIsOpen] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();


    return (
        <nav className=" bg-white font-mono fixed top-0 left-0 w-full z-50 shadow-md mx-auto">
            <div className={`container  flex items-center ${isOpen?'lg:flex-row flex-col':''} justify-between`}>
                {/* Logo */}
                <div className="flex items-center ml-10">
                    {/* <img src={logo} alt="Logo" className="h-13 w-full p-4" /> */}
                    <div >
                    <Link to="/">
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="" strokeLinejoin="round" strokeWidth="2" className="w-20 h-20 text-black p-4 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    </Link>
                    </div>
                </div>

                {/* Hamburger menu toggle (hidden on large screens) */}
                <div className=" lg:hidden">
                    <button
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="grey">
                            {/* Menu icon */}
                            {!isOpen && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                            {/* Close icon */}
                            {isOpen && (
                               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                             
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="flex items-center lg:flex-row flex-col justify-center text-xl lg:flex-grow gap-10 ">
                        <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4 transition duration-500">
                            Home
                        </Link>
                        <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4 transition duration-500">
                            About Us
                        </Link>
                        <Link to='/addforms' className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4">
                            Have Something to share?
                        </Link>
                        <Link to='/news' className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4">
                            Newsroom
                        </Link>
                    </div>
                    <div className='text-center'>
                        {isAuthenticated ? (<button onClick={() => logout({ returnTo: window.location.origin })} className="inline-block text-xl px-4 py-2 leading-none border border-purple-500 rounded-md text-purple-500 hover:border-black hover:text-white hover:bg-purple-500 mt-4 lg:mt-0">
                            Log Out
                        </button>) :
                            (<button onClick={() => loginWithRedirect()} className="inline-block text-xl px-4 py-2 leading-none border border-purple-500 rounded-md text-purple-500 hover:border-black hover:text-white hover:bg-purple-500 mt-4 lg:mt-0 transition duration-500 mr-6">
                                Login
                            </button>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
