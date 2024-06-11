import React from 'react'
import { logoMinimalistic } from '../../constants'
import { logoModern } from '../../constants'
import { logoSimple } from '../../constants'
import { logoTypography } from '../../constants'
import LogoCard from './LogoCard'
import Button from "./Button"
import { useState } from 'react'


const Logo = () => {
  const [logo, setLogo] = useState({
    minimalistic: true,
    modern: false,
    simple: false,
    typography: false,
  })

  const handleMinimalistic = () => {
    setLogo((currentState) => ({minimalistic: true, modern: false, simple: false, typography: false}))
  }
  const handleModern= () => {
    setLogo((currentState) => ({minimalistic: false, modern: true, simple: false, typography: false}))
  }
  const handleSimple= () => {
    setLogo((currentState) => ({minimalistic: false, modern: false, simple: true, typography: false}))
  }
  const handleTypography= () => {
    setLogo((currentState) => ({minimalistic: false, modern: false, simple: false, typography: true}))
  }
  return (
    <div className='py-20 lg:px-12 flex flex-col gap-20'>
        <h1 className="font-semibold font-helvetica text-white-1 text-end max-lg:text-[40px] max-lg:text-center lg:text-[45px] xl:text-[60px]"><span className="text-red-1">RED</span>WOOD LOGO</h1>
        <div className='flex items-center gap-4 max-sm:grid max-sm:grid-cols-2'>
          <Button value="Minimalistic" onClick={handleMinimalistic}/>
          <Button value="Modern" onClick={handleModern}/>
          <Button value="Simple" onClick={handleSimple}/>
          <Button value="Typography" onClick={handleTypography}/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-24'>
          {logo.minimalistic && (
            logoMinimalistic.map((logo) => (
              <LogoCard title={logo.title} imgUrl={logo.imgUrl} price={logo.price}/>
            ))
          )}
          {logo.modern && (
            logoModern.map((logo) => (
              <LogoCard title={logo.title} imgUrl={logo.imgUrl} price={logo.price}/>
            ))
          )}
          {logo.simple && (
            logoSimple.map((logo) => (
              <LogoCard title={logo.title} imgUrl={logo.imgUrl} price={logo.price}/>
            ))
          )}
          {logo.typography && (
            logoTypography.map((logo) => (
              <LogoCard title={logo.title} imgUrl={logo.imgUrl} price={logo.price}/>
            ))
          )}
        </div>
    </div>
  )
}

export default Logo