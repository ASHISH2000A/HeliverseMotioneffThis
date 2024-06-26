import React from 'react'
import EnvatoLogo from '../assets/envatologobg.png'
import GoogleFi from '../assets/motionarteffect-img1.png'
import WordPress from '../assets/motionarteffect-img3.png'
import Reviewimg from '../assets/motionarteffect-img4.png'

const Testimonial = () => {
   

      const Outfitp={
         fontFamily:'Outfit,sans-seriff'
      }

      const SoraReview={
        fontFamily:'Sora,sans-seriff'
     }



  return (
      <>
        <div className="relative text-center text-white mt-24 p-16">
        <h2 className="mb-14 text-xl font-Outfit text-[#EEE5FF] font-light" style={Outfitp}>Trusted by thousands of users around the world</h2>
        <div className="flex flex-col items-center gap-48 sm:flex-row sm:justify-center">


            {/* <!-- Review 1 --> */}
            <div className="flex flex-row items-center gap-5">
                <div className="bg-gray-800 p-4 rounded-full h-24 w-24 border-2  border-gray-600 ">
                    <img src={EnvatoLogo} alt="Icon 1" className='object-cover'/>
                </div>
                <div className='flex flex-col '>
                    <div className="text-xl mb-4">
                        <img src={ Reviewimg } alt="Review"/>
                    </div>
                    <div className="text-sm" style={SoraReview}>4.5 Score, 9 Reviews</div>
                </div>
            </div>


            {/* <!-- Review 2 --> */}
            <div className="flex flex-row items-center gap-5">
                <div className="bg-gray-800 border-2 border-gray-600 rounded-full  h-24 w-24 ">
                    <img src={GoogleFi } alt="googleFi" className='mb-2 ' style={{height:"89px",width:"100px"}}/>
                </div>
                <div className='flex flex-col'>
                    <div className="text-xl mb-4">
                    <img src={ Reviewimg } alt="Review"/></div>
                    <div className="text-sm" style={SoraReview}>4.5 Score, 9 Reviews</div>
                </div>
            </div>



            {/* <!-- Review 3 --> */}
            <div className="flex flex-row items-center gap-5">
            <div className="bg-gray-800 border-2 border-gray-600 rounded-full  h-24 w-24 ">
                    <img src={WordPress} alt="Wordpress" className='mb-2 ' style={{height:"89px",width:"100px"}}/>
                </div>
                <div className='flex flex-col'>
                    <div className="text-xl mb-4">
                    <img src={ Reviewimg } alt="Review"/></div>
                    <div className="text-sm" style={SoraReview}>4.5 Score, 9 Reviews</div>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}

export default Testimonial
