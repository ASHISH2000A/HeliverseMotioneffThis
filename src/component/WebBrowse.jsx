import React from 'react'

const WebBrowse = () => {

  const Sorafont={
    fontFamily:'Sora,sans-seriff',
 }

 const Outfitp={
  fontFamily:'Outfit,sans-seriff',
 }


  return (
    <div className="relative flex justify-center items-center max-w-full py-20">
    <div className="bg-gradient-to-r from-[#0F0821] to-[#221B33] mx-16 border-2 border-x-gray-500 border-y-gray-700 p-16 rounded-2xl shadow-lg w-full text-center">
      <h2 className="text-2xl font-medium mb-4 text-white" style={Sorafont}>Supported by All Popular Browsers</h2>
      <p className="mb-8  text-[#EEE5FFBD] font-light text-lg" style={Outfitp}>Rest assured, Motion Art is designed to be compatible <br/> with all major web browsers.</p>
      <div className="flex justify-center space-x-6">
      <img src="src\assets\MotionArtEffect-img8.png" alt="webBrowsers" className='h-auto w-auto' />   
      </div>
    </div>
  </div>
  )
}

export default WebBrowse