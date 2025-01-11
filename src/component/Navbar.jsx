import React, { useEffect } from 'react'

const Navbar = () => {
   
    useEffect(() => {
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        
        const navToggle = () => {
            btn.classList.toggle('open');
            menu.classList.toggle('flex');
            menu.classList.toggle('hidden');
        }

        btn.addEventListener('click', navToggle);

        // Cleanup function
        return () => {
            btn.removeEventListener('click', navToggle);
        }
    }, []);


const navbarItems = [
    {
        id: 1,
        name: "About",
        path: "#"
    },
    {
        id: 2,
        name: "Careers",
        path: "#"
    },
    {
        id: 3,
        name: "Events",
        path: "#"
    },
    {
        id: 4,
        name: "Products",
        path: "#"
    },
    {
        id: 5,
        name: "Support",
        path: "#"
    }
]
const mobileItems = ['Home','About','Careers','Events','Products','Support']

  return (
    <>
    <nav className='flex items-center justify-between font-bold text-white'>
        {/* logo */}
        <img src="assets/images/logo.svg" alt="" />
        {/* menu */}
        <div className="hidden h-10 font-alata md:flex md:space-x-8">
            {navbarItems.map((item) => (
                <div className="group" key={item.id}>
                <a href={item.path}>{item.name}</a>
                <div className="mx-2 group-hover:border opacity-0 group-hover:opacity-100 rounded transition-all duration-500 group-hover:border-blue-50"></div>
            </div>
            ))}
        </div>
        {/* Hamburger button */}
        <div className="md:hidden">
            <button id='menu-btn' type='button' className="z-40 block hamburger md:hidden focus:outline-none">
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
            </button>
        </div>
    </nav>
     {/*Mobile Menu*/}
     <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
        {mobileItems.map((item) => (
            <a className="hover:text-pink-500">{item}</a>
        ))}
        
     </div>
    </>
  )
}

export default Navbar