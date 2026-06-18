import React from 'react'
import heroimage from '../assets/heroimage.png'
import { useState } from "react";


const HeroSection = () => {
  
   const [answer, setAnswer] = useState("yes  ");

  return (
   <section className='w-full'>
   <div className="bg-[#F6F3FC] flex flex-col-reverse lg:flex-row items-center justify-center  px-6 lg:px-16 py-10 gap-8">
     <div className='flex flex-col gap-[40px]'>
       <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#181C1C]">Invisible Aligners for a dream smile</p>
        <p className='text-lg md:text-xl lg:text-2xl font-medium'>Book a Scan and avail a free<br/>
         Orthodontist Consult worth <span className='font-bold text-[#8F62D4]'>₹1500</span></p>
     </div>
     <div>
        <img src={heroimage} alt="AI expand pranav Image"  className="w-full max-w-[550px] h-auto" />
     </div>
    </div>


       <div className='p-10'>
     <div className=''>
       <p className='font-semibold text-[24px] text-center mb-6'>Do you have Teeth Gaps or Crooked Teeth?</p>
       <div className='flex justify-center gap-[24px] mb-10'>

       <label  className='flex items-center  gap-2 font-semibold text-lg'>
        <input type="radio" name="teeth" value="yes"  className="scale-150  accent-[#8F62D4]" checked={answer === "yes"} 
        onChange={(e) => setAnswer(e.target.value)}
        />
        Yes
       </label>

      <label className=" flex items-center gap-2 ml-4  font-semibold text-lg">
        <input
          type="radio"
          name="teeth"
          value="no"
          checked={answer === "no"}
          onChange={(e) => setAnswer(e.target.value)}  className="scale-150  accent-[#8F62D4]"
        />
        No
      </label>

       </div>

       </div>

  {answer !== "no" ? (
  <div
    className={`transition-all duration-300 ${
      answer === "yes" ? "opacity-100" : "opacity-50"
    }`}
  >
    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
      <input
        type="text"
        placeholder="Ajay Kumar"
        className="w-full lg:w-[320px] h-[58px] border border-[#2F3737] rounded-md px-4 outline-none"
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        className="w-full lg:w-[320px] h-[58px] border border-[#C8D0D0] rounded-md px-4 outline-none"
      />

      <button className="w-full lg:w-[320px] h-[58px] bg-[#8F62D4] text-white font-medium rounded-md hover:bg-[#8F62D4]/40">
        Book a Free Scan
      </button>
    </div>

    <div className="flex justify-center mt-4">
      <label className="flex items-start gap-2 text-[12px] text-gray-500 max-w-[700px]">
        <input
          type="checkbox"
          className="mt-1 scale-125 accent-[#8F62D4]"
        />
        <span className="text-[#475252]">
          I hereby consent to receive calls, messages and updates
          regarding my enquiry.
        </span>
      </label>
    </div>
  </div>
) : (
  <div className="text-center mt-8">
    <p className="text-xl md:text-2xl font-semibold">
      Thank you for reaching out.
    </p>
    <p className="text-lg md:text-xl mt-2">
      Please contact us if you have any dental alignment concerns in the future.
    </p>
  </div>
)}
       

      </div>     
   </section>
  )
}

export default HeroSection