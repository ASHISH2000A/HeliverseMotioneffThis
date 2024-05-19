import React from 'react'

const block = () => {
  return (
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between p-8 mt-28">
    <div className=" md:w-2/3 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p class="text-xl mb-6  text-gray-500 ">
            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
        </p>
        <button>
            <a href="#" className="inline-block bg-gradient-to-r from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] text-white font-semibold px-16 py-5 rounded-2xl shadow-lg ">
            Purchase From Envato
            </a>
        </button>
    </div>
    <div className="md:w-1/3 flex justify-center md:justify-end">
        <img src="src\assets\MotionArtEffect-img5.png" alt="Magic Wand" class="w-60 h-60"/>
    </div>
</div>
  )
}

export default block