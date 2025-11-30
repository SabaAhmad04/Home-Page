import React from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedContent from './AnimatedContent'
import Button2 from './Button2'


const Card = ({iconImage,image,name}) => {
  const navigate = useNavigate();
  
  const goToAboutSection = (name) => {
    const section = name.toLowerCase();
    navigate(`/services?section=${section}`);
  }
  return (
    <AnimatedContent
      distance={100}
      animationAxis
      reverse={false}
      duration={1.5}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0}
    >
    <div className='w-[400px] relative pt-20 flex items-center justify-center '>
        <img src={image} className='h-[320px] w-[300px] xs:w-[360px] object-cover absolute rounded-md'></img>

        <div className='relative flex flex-col items-center justify-center py-2 ' >

          <div className='rounded-full bg-amber-200 text-white duration-500 ease-in-out '></div>

          <div className='text-white hover:animate-pulse duration-500  hover:text-blue-500 hover:scale-90 z-0'>
            {iconImage}
          </div>

          <div className='mt-8 font-bold text-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-rose-300  text-transparent bg-clip-text z-50'>
            {name}
          </div>

          <div className='text-white py-2 px-6 text-xl rounded-full mt-14  font-medium '>
            <Button2/>
          </div>

        </div>
        
    </div>
    </AnimatedContent>
  )
}

export default Card