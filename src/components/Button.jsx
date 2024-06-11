import clsx from 'clsx'
import React from 'react'

const Button = ({ value, className, onClick }) => {
  return (
    <button onClick={onClick} className={`px-10 py-3 border border-white-1 rounded-full text-white-1 text-[16px] font-helvetica font-light max-sm:text-[12px] ${className}`}>
        {value}
    </button>
  )
}

export default Button