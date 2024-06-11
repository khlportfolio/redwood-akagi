import React from 'react'
import EmailSend from "../assets/emailsend.svg"
import ContactImg from "../assets/contact.svg"

const Contact = () => {
  return (
    <div className='py-20 lg:px-12 flex flex-row items-center justify-center max-md:flex-col max-md:gap-20'>
        <div className='flex-1 flex flex-col'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[25px] font-helvetica text-white-1'>Contact Support</h2>
                <h1 className='bg-gradient-to-b from-red-1 to-white-1 bg-clip-text text-transparent text-[50px] font-helvetica max-w-xl leading-[60px]'>How can our team help you today ?</h1>
                <p className='text-[16px] font-helvetica text-white-1/40'>Our team is always available, offering excellent services for any issues you may encounter.</p>
            </div>
            <div className='mt-10'>
                <button className='px-10 py-3 border border-white-1 rounded-full text-white-1 text-[16px] font-helvetica font-light max-sm:text-[12px] w-full flex items-center justify-between'>
                    <p>redwood.company@gmail.com</p>
                    <img src={EmailSend} alt="Send" width={30}  height={30} />
                </button>
            </div>
        </div>
        <div className='flex-1 flex justify-center'>
            <img src={ContactImg} alt="" />
        </div>  
    </div>
  )
}

export default Contact