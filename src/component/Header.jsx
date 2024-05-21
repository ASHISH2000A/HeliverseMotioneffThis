import React from 'react'

const Header = () => {
 
  const Outfitbtn={
    fontFamily:'Outfit,sans-seriff'
}








  return (
<div class="relative w-full bg-transparent p-3">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span>
         <img src="src\assets\MotionArtEffect-logo.png" alt="Logo" />   
      </span>
    </div>
    <div class="hidden lg:block">
      <button
        type="button"
        class="rounded-lg bg-white px-9 py-3  text-black shadow-sm transition ease-in-out duration-300 hover:bg-transparent hover:text-white hover:border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span className='p-5 text-[#0D051F] font-normal text-lg' style={Outfitbtn}>Purchase Now</span>
      </button>
    </div>
    <div class="lg:hidden">
    </div>
  </div>
</div>
)
}
export default Header