import React from 'react'

const Footer = () => {
  return (
    <div>
        <div class="relative w-full  p-3 bg-gradient-to-l from-[#6228d7] via-[#ee2a7b] to-[#f9ce34]">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div class="inline-flex items-center space-x-2">
        <span>
           <p style={{color:"#EEE5FFB8"}}>© 2023 Copywrite. All rights reserved by <span>
            <a href="https://www.linkedin.com/in/ashishgupta748/">Ashish Gupta</a>
           
            </span></p>  
        </span>
      </div>
      <div class="hidden lg:block">
         <span>
            <button style={{color:"#EEE5FFB8"}}>Documentaion</button>
         </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
         <span>
         <button style={{color:"#EEE5FFB8"}}>Support</button>
         </span>
      </div>
      <div class="lg:hidden">
      </div>
    </div>
  </div>
  </div>
  )
}

export default Footer