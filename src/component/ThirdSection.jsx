import React from "react";

const ThirdSection = () => {
  const item1 = [
    {
      id: 1,
      name: "deep earth",
      mobileImg: "assets/images/mobile/image-deep-earth.jpg",
      desktopImg: "assets/images/desktop/image-deep-earth.jpg",
    },
    {
      id: 2,
      name: "night arcade",
      mobileImg: "assets/images/mobile/image-night-arcade.jpg",
      desktopImg: "assets/images/desktop/image-night-arcade.jpg",
    },
    {
      id: 3,
      name: "soccer team vr",
      mobileImg: "assets/images/mobile/image-soccer-team.jpg",
      desktopImg: "assets/images/desktop/image-soccer-team.jpg",
    },
    {
      id: 4,
      name: "the grid",
      mobileImg: "assets/images/mobile/image-grid.jpg",
      desktopImg: "assets/images/desktop/image-grid.jpg",
    },
  ];
  const item2 = [
    {
      id: 1,
      name: "from up above vr",
      mobileImg: "assets/images/mobile/image-from-above.jpg",
      desktopImg: "assets/images/desktop/image-from-above.jpg",
    },{
      id: 2,
      name: "pocket borevr",
      mobileImg: "assets/images/mobile/image-pocket-borealis.jpg",
      desktopImg: "assets/images/desktop/image-pocket-borealis.jpg",
    },{
      id: 3,
      name: "the curiosity",
      mobileImg: "assets/images/mobile/image-curiosity.jpg",
      desktopImg: "assets/images/desktop/image-curiosity.jpg",
    },{
      id: 4,
      name: "make it fisheye",
      mobileImg: "assets/images/mobile/image-fisheye.jpg",
      desktopImg: "assets/images/desktop/image-fisheye.jpg",
    }
  ]
  return (
    // Creation Container
    <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
      {/* Creation Header */}
      <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button className="hidden btn md:block"> see all</button>
      </div>
      {/* Items Container 1*/}
      <div className="item-container">
        {/* Items */}
        {item1.map((item) => (
           <div className="group item">
           <img src={item.desktopImg} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
           <img src={item.mobileImg} alt="" className="w-full md:hidden"/>
           {/* Item Gradient */}
           <div className="item-gradient"></div>
           {/* Item text */}
           <h5>{item.name}</h5>
         </div> 
        ))}
      </div>
      {/* Items Container 2*/}
      <div className="item-container mt-6">
        {/* Items */}
        {item2.map((item) => (
           <div className="group item">
           <img src={item.desktopImg} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110"/>
           <img src={item.mobileImg} alt="" className="w-full md:hidden"/>
           {/* Item Gradient */}
           <div className="item-gradient"></div>
           {/* Item text */}
           <h5>{item.name}</h5>
         </div> 
        ))}
      </div>
      {/* Bottom Button Container*/}
      <div className="flex justify-center mt-10 md:hidden">
         <button className="btn w-full md:hidden">See All</button>
      </div>
    </div>
  );
};

export default ThirdSection;
