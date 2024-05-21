import React from 'react'
import magicWand from '../assets/motionarteffect-img5.png'

const block = () => {


    const SoraHead={
        fontFamily:'Sora,sans-seriff',
        fontSize:'35px',
        width:'750px',
        lineHeight:'55px'
     }
     const Outfitp={
        fontFamily:'Outfit,sans-seriff',
        color: "#EEE5FFBD"
     }



  return (
        <div className="relative  mx-auto flex flex-col md:flex-row items-center justify-between p-8 mt-16">
    <div className=" md:w-2/3 text-center md:text-left mb-8 md:mb-0">
        <h1 style={SoraHead} className=" text-white md:text-5xl font-medium mb-4">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p class="text-lg mb-6 " style={Outfitp}>
            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
        </p>
        <button>
            <a href="#" className="inline-block bg-gradient-to-r from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] text-white font-semibold px-16 py-5 rounded-2xl shadow-lg ">
           <span style={SoraHead} className='text-xl font-light'>Purchase From Envato</span>
            </a>
        </button>
    </div>
    <div className="md:w-1/3 flex justify-center md:justify-end">
        <img src={magicWand} alt="Magic Wand" class="w-60 h-60"/>
    </div>
</div>
  )
}

export default block
