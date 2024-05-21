import React from 'react'

const Banner = () => {

   const Sorafont={
          fontFamily:'Sora,sans-seriff',
          fontSize:"60px",
          width:'650px'
   }
   const Sorafontp={
      fontFamily:'Sora,sans-seriff',
     
}



  return (
    <>
     <div class=" relative flex md:flex">
         <div class="flex-none w-80">
            <div class="flex flex-col w-full ">
                  <div className='px-24 py-24'>
                      <p className='text-white text text-lg font-medium'><span className='bg-gradient-to-l from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] bg-clip-text text-transparent' style={Sorafontp}>Transform Your Website</span></p>
                  </div>
                  <div className='px-24' style={{marginTop:"-90px"}}>
                    <p className='text-white text text-lg font-medium '><span className='bg-gradient-to-l from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] bg-clip-text text-transparent'>With Motion Art Effect </span></p>
                  </div>
            </div>
         </div>
         <div class="flex-initial w-80">
            <div class="flex flex-col ">
                  <div className=' px-16 py-24'> 
                     <h1 style={Sorafont} className='  font-semibold text-white'>
                      Attract Your Visitors Attention With Colorful <span className=' bg-gradient-to-l from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] bg-clip-text text-transparent'>Motion Art Effect</span>
                     </h1>



                  </div>
                  <div className='' style={{width:"750px",marginTop:"-80px"}}>
                     <h2 className='font-Outfit text-[#EEE5FFBD] text-lg font-light px-16'>
                         Unleash the power of creativity with Motion Art for Elementor - 
                         your ultimate solution for seamlessly 
                         integrating captivating animations into your website.
                     </h2>                    
                  </div>
            </div>
         </div>
         
     </div>

    </>
  )
}

export default Banner