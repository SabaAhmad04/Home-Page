import ImageSlider from '../component/ImageSlider'
import Cards from '../component/Cards'
import { HiCode } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { LuChevronsDown } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import Particles from '../component/Particles'
import Button from '../component/Button'
import { GrWaypoint } from "react-icons/gr";


const Home = () => {

  const navigate = useNavigate();
   const [isVisible,setIsVisible] = useState(true);
   const [isOpen,setIsOpen] = useState(true);
   const [y, setY] = useState(0);

        useEffect(() => {
          const onScroll = () => setY(window.scrollY);
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
        }, []);
  
         useEffect(() => {
                const checkVisibility = () => {
                        const mobile = window.innerWidth < 919;
                        setIsVisible(!mobile); 
                };
  
                checkVisibility();
                window.addEventListener("resize",checkVisibility);
                return () => {
                     window.removeEventListener("resize",checkVisibility);
                };
         },[]);
  
         useEffect(() => {
                 const checkScroll = () => {
                          const SCROLL_TRIGGER = 37;
                          const scrolledEnough = window.scrollY > SCROLL_TRIGGER;
                          setIsOpen(!scrolledEnough);
                 };
  
                 checkScroll();
                 window.addEventListener("scroll",checkScroll);
                 return () => {
                       window.removeEventListener("scroll",checkScroll);
                 }
         },[]);

  return (

    <div className='flex flex-col items-center justify-center w-full'>
      <div className='w-full flex flex-col'>
        <div className='flex fixed right-1 bottom-10 gap-1 z-3000'>
          <p className='text-gray-500 mt-2.5'>
            <Link to="https://wa.me/1234567890" className='bg-slate-200 px-1 rounded-md py-1'>
               Message
            </Link>
          </p>
          <a
            href='https://wa.me/1234567890'
            target="_blank"
            rel="noopener noreferrer" 
            className='text-white p-1  bg-green-500 rounded-full cursor-pointer'>
              <FaWhatsapp size={36}/>
          </a>
        </div>
        <div  style={{ width: '100%', height: '800px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={1000}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            
          />
        </div>
        <div className=' md:block relative hidden w-full' >
          <ImageSlider/>
        </div>


      </div>

      <div className='w-full pt-20 flex flex-col flex-wrap place-items-center z-100' >
        <h1 className='w-[90%] font-bold text-6xl flex items-center justify-center text-center text-white/65'>
          Our Products
        </h1>
        <p className='w-[85%] text-2xl mt-10 text-center text-white/65'>
          Customer focused and competitively based Softare solutions on the latest emerging technologies of the time, non-compromising on the quality
          of the products which are vastly tested and yet at an affordable price.
        </p>
        <div className='w-[90%] flex flex-wrap'>
          <Cards/>
        </div>
        <div className='w-3/4 items-center justify-center mt-20 '>
          <div className=' flex flex-col  items-center justify-center bg-gray-950/70 backdrop-blur-xl border-cyan-300/40 border-[1px] rounded-lg py-20 z-20 shadow-[0_0_30px_1px_rgb(34,211,238)]' >
            <p className='text-6xl font-bold text-white/50 text-center'>
              AT A GLANCE
            </p>
            <p className='w-[70%] md:text-xl text-l text-white/80 text-center mt-8'>Founded in 2025, we are a forward-thinking software development company committed to delivering cutting-edge solutions across diverse industries. Our expertise spans the complete lifecycle — from innovative design, AI solutions, and agile development to rigorous testing, seamless implementation, smooth roll-out, and ongoing maintenance. We combine innovation with reliability to deliver impactful results for our clients worldwide.</p>
          </div>
        </div>

        <div className='w-full mt-32  flex flex-col items-center justify-center'>
          <h1 className='w-[70%] font-bold text-6xl text-center text-white/80'>WHAT WE DO</h1>
          <p className='w-[70%] text-xl mt-8 text-center text-white/70'>
            We offer cutting-edge AI and software solutions across all key verticals and horizontals, spanning the complete life cycle from designing, innovation, development, and testing to implementation, roll-out, and maintenance.
          </p>
        </div>

        {/* BADA ICON WALA SECTION */}

        <div className='w-[80%] flex-wrap lg:flex-nowrap  flex flex-col lg:flex lg:flex-row gap-y-16 justify-center lg:justify-between items-center pt-28 '>

          {/* ICON 1 */}

          <div className='flex flex-col place-items-center justify-center'>
            <div className='border-2 w-32 h-32 border-amber-700 rounded-full flex item-center justify-center text-amber-700'>
              <HiCode size={64} className='hover:animate-ping mt-7 duration-75 '/>
            </div>
            <p className='mt-4  font-semibold text-xl'>Software Development</p>
            <div className='mt-18  text-amber-700 '> <LuChevronsDown size={40}/> </div>

            <div className='mt-6  w-[95%]'>
              <div className='w-full h-[1px] bg-gray-600'>
              </div>
              <p className='text-gray-300/60 mt-2 text-center'>
                Software development is a process of writing and maintaining the source code
              </p>
              <div className='w-full h-[1px] bg-gray-600 mt-3'>
              </div>
            </div>
            
          </div>

          {/* ICON 2 */}

          <div className='flex flex-col place-items-center justify-center'>
            <div className='border-2 w-32 h-32 border-cyan-400 rounded-full flex item-center justify-center text-cyan-400'>
              <FaPencil size={56} className='hover:animate-ping mt-7.5 duration-75'/>
            </div>
            <p className='mt-4  font-semibold text-xl'>Content Writing</p>
            <div className='mt-18  text-cyan-400'> <LuChevronsDown size={40}/> </div>

            <div className='mt-6  w-[95%]'>
              <div className='w-full h-[1px] bg-gray-600'>
              </div>
              <p className='text-gray-300/60 mt-2 text-center'>
                Software development is a process of writing and maintaining the source code
              </p>
              <div className='w-full h-[1px] bg-gray-600 mt-3'>
              </div>
            </div>
          </div>



          {/* ICON 3 */}

          <div className='flex flex-col place-items-center justify-center '>
            <div className='border-2 w-32 h-32 border-green-400 rounded-full flex item-center justify-center text-green-400'>
              <FaCartShopping size={56} className='hover:animate-ping mt-8 duration-75'/>
            </div>
            <p className='mt-4  font-semibold text-xl'>Ecommerce development</p>
            <div className='mt-18  text-green-400'> <LuChevronsDown size={40}/> </div>

            <div className='mt-6  w-[95%]'>
              <div className='w-full h-[1px] bg-gray-600'>
              </div>
              <p className='text-gray-300/60 mt-2 text-center'>
                Software development is a process of writing and maintaining the source code
              </p>
              <div className='w-full h-[1px] bg-gray-600 mt-3'>
              </div>
            </div>
          </div>
          
          
        </div>

        <Link to={"/services"} className='mt-12 '>
          <Button/>
        </Link>

        <div className='md:w-[70%] w-[80%]  md:h-110 h-116 border-cyan-400/50 hover:border-cyan-500/80 border bg-cyan-800/20 rounded-md backdrop-blur-3xl flex flex-col items-center gap-y-16 mt-14 mb-12 drop-shadow-[0_0_20px_rgb(34,211,238)]'>
             <h1 className='md:text-6xl text-4xl font-bold text-center text-white mt-10'>Reach Us</h1>
             <p className='text-white md:text-3xl text-xl text-center font-bold w-[60%]'>Your next big project starts here — drop us a message and let’s make it happen.</p>
             <Link to="/contactus" className='bg-green-300/30 border-[1px] border-green-500 hover:border-green-600 p-7 rounded-full'>
              <GrWaypoint className='text-4xl text-green-500 font-bold animate-upDown'/>
             </Link>
        </div> 

      </div>
    </div>
    
  )
}

export default Home