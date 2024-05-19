import React from 'react'

const Card = () => {
  return (
    <div className="container mx-auto p-6 mb-28">

      {/* cards content start from over here */}

         
                  <h1 className="text-white text-2xl text-center justify-items-center mt-9" style={{fontSize:"35px",lineHeight:"55px",fontFamily: "Sora, Sans-serif;"}}>An All-Round Plugin With Powerful <br /> Features</h1>
                  <p className="text-[#eee5ffbd] font-light text-lg mx-8 my-8 text-center justify-items-center">Whether you're a seasoned web designer or just starting out, Motion Art for <br/> Elementor seamlessly integrates with the Elementor platform, providing you <br/> with a seamless and intuitive experience.</p>
              

















        {/* cards container starts from here */}
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
        {/* card 1 */}
      <div className="bg-gradient-to-b from-[#0F0821] to-[#221B33] p-10 border-2 border-x-gray-500 border-y-gray-700  rounded-3xl shadow-lg flex-1 max-w-sm">
        <img src="src\assets\MotionArtEffect-img9.png" alt=" thunder Light " style={{marginLeft:"-55px"}} className="mb-4"/>
        <h2 className="text-2xl font-semibold mb-2 text-white   ">Light Weight</h2>
        <p className='text-gray-500 text-lg font-light  mt-5'>Motion Art for Elementor is designed to be lightweight.</p>
      </div>
      {/* card 2 */}
      <div className="bg-gradient-to-b from-[#0F0821] to-[#221B33] border-2 border-x-gray-500 border-y-gray-700 p-10 rounded-3xl  shadow-lg flex-1 max-w-sm ">
        <img src="src\assets\MotionArtEffect-img6.png" alt="Thumbs up" style={{marginLeft:"-55px"}}  className="mb-4  "/>
        <h2 className="text-2xl font-semibold mb-2 text-white   ">100% Responsive</h2>
        <p className='text-gray-500 text-lg font-light  mt-5'>Create a consistent visual experience across all devices.</p>
      </div>
      {/* card 3 */}
      <div className="bg-gradient-to-b from-[#0F0821] to-[#221B33] border-2 border-x-gray-500 border-y-gray-700 p-10 rounded-3xl  shadow-lg flex-1 max-w-sm ">
        <img src="src\assets\MotionArtEffect-img7.png" alt="User Friendly Interface" style={{marginLeft:"-55px"}}  className=" mb-4"/>
        <h2 className="text-2xl font-semibold mb-2 text-white   ">User Friendly Interface</h2>
        <p className='text-gray-500 text-lg mt-5'>Ensure a smooth experience for both applicants and administrators.</p>
      </div>
    </div>
  </div>
  )
}

export default Card