import React from 'react'
const Boxes = () => {
  return (
    // main box section 
    <div className="container mx-auto  mb-20">
    <h1 className="leading-5 text-center  text-2xl md:text-4xl font-bold mb-8 text-white">
        Apply On Any Section Or Enable For <br/> <br /><span className='mt-8'>Whole Page</span></h1>
        {/* for two boxes flex starts from here */}
    <div className="flex flex-col md:flex-row justify-center gap-8 px-7 mt-24">
        {/* box 1 for img section */}
      <div className=" h-1/3 border-2 border-x-gray-500 border-y-gray-700 mb-20 p-6 rounded-lg shadow-lg flex-1" style={{ backgroundImage: 'linear-gradient(#0F0821, #221B33)'}}>
        <h2 className="text-2xl font-semibold mb-4 text-white">Apply On Section</h2>
        <p className="mb-4  text-gray-500 ">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
        <div className=" rounded-full mb-4">
          <img src="src\assets\MotionArtEffect-img11.png" alt="Logo" className='h-auto w-auto' />   
        </div>
      </div>
      {/* box 2 for img section */}
      <div className="border-2 border-x-gray-500 border-y-gray-700 mt-20 pb-20 p-6 rounded-lg shadow-lg flex-1 h-1/2" style={{ backgroundImage: 'linear-gradient(#0F0821, #221B33)'}}>
        <h2 className="text-2xl font-semibold mb-4 text-white">Apply On Page</h2>
        <p className="mb-4  text-gray-500 ">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
        <div className="rounded-full mb-4">
          <img src="src\assets\MotionArtEffect-img11.png" alt="Logo" className='h-auto w-auto 'style={{marginBottom:"-55px"}} />   
        </div>
      </div>
      {/* box 2 ends here */}
    </div>
  </div>
  )
}

export default Boxes