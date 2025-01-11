import React from 'react'

const Footer = () => {
    const menuItems = [
        {
          id: 1,
          name: "About",
          path:'#'
        },
        {
          id: 2,
          name: "Careers",
          path:'#'
        },
        {
          id: 3,
          name: "Events",
          path:'#'
        },
        {
          id: 4,
          name: "Products",
          path:'#'
        },
        {
          id: 5,
          name: "Support",
          path:'#'
        }
    ]
    const icons = [
        {
          id: 1,
          icon: "assets/images/icon-facebook.svg",
        },
        {
          id: 2,
          icon: "assets/images/icon-twitter.svg",
        },
        {
          id: 3,
          icon: "assets/images/icon-pinterest.svg",
        },
        {
          id: 4,
          icon: "assets/images/icon-instagram.svg",
        }
    ]
  return (
    <div className='bg-black'>
        {/* Container */}
        <div className="container max-w-6xl py-10 mx-auto">
            {/* Footer Flex Container*/}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* Menu & Logo Container */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                    {/* Logo Container */}
                    <div className="h-8">
                        <img src="assets/images/logo.svg" alt="" className="w-44 md:ml-3" />
                    </div>
                    {/* Menu Container */}
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        {/* Menu Items*/}
                        {menuItems.map((item) => (
                          <div className="h-10 group" key={item.id}>
                          <a href={item.path}>{item.name}</a>
                          <div className="mx-2 group-hover:border opacity-0 group-hover:opacity-100 rounded transition-all duration-500 group-hover:border-blue-50"></div>
                      </div>  
                        ))} 
                    </div>
                </div>
                {/* Social & Copy Container */}
                <div className="flex flex-col items-start justify-between space-y-4 text-grey-500">
                    {/* Icons Container*/}
                    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        {/* Icons */}
                        {icons.map((icon) => (
                            <div className="h-8 group">
                            <a href="#">
                                <img src={icon.icon} alt="" className='h-6'/>
                            </a>
                        </div>
                        ))}
                        
                    </div>
                    {/* Copy Container */}
                    <div className="font-bold text-gray-600">
                        &copy;2024 Loopstudios. All Rights Reserved.
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer