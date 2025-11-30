import { Link } from "react-router"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const Footer = () => {
         return(
          <div className="w-full flex items-center justify-center bg-slate-700/50">

              <div className="md:w-[80%] w-[60%] flex flex-col  lg:flex-row justify-between mb-14 mt-10 gap-y-6">
                    <div className="flex md:flex-row flex-col lg:w-[40%] md:w-[78%] w-full justify-between gap-y-6">
                    <div className="flex flex-col">
                         <p className=" text-xl items-start font-medium bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-700 bg-clip-text text-transparent">KodeHeimer <span className="font-normal text-white">marketplace</span></p>
                         <div className="flex gap-x-4">
                              <a
                                href="https://www.facebook.com/people/Kode-Heimer/pfbid0aj2DnzK8cTgeVCMgtccE1HCxspw43u7hvnni3FLV4hZSqXanqFAMFBHMhyzptoz9l/"
                                target="_blank"    
                                rel="noopener noreferrer"  
                                className="flex items-center justify-center"
                              >
                                <FaFacebookF className="text-white text-xl hover:text-blue-400" size={20} />
                              </a>
                              <a 
                              target="_blank"    
                              rel="noopener noreferrer" 
                              href="https://www.instagram.com/kode.heimer?igsh=MTd1ZmoycndpdWNq" className="flex items-center justify-center">
                                   <FaInstagram className="text-white text-xl hover:text-red-600" size={20}/>
                              </a>
                              <a 
                              target="_blank"    
                              rel="noopener noreferrer"
                              href="mailto:kodeheimer07@gmail.com" className="flex items-center justify-center">
                                   <TiMail className="text-white text-xl  hover:text-amber-500" size={28}/>
                              </a>
                              <a 
                              target="_blank"    
                              rel="noopener noreferrer"
                              href="https://x.com/kodeheimer07?t=fxv7st7wBw5gdYmLTmjftg&s=09" className="flex items-center justify-center">
                                   <RxTwitterLogo className="text-white text-xl hover:text-cyan-500" size={20}/>
                              </a>
                         </div>
                    </div>

                    <div className="flex flex-col  gap-y-4">
                         <h1 className="text-white font-semibold text-lg">Quick Links</h1>
                         <div className="flex flex-col gap-y-3">
                              <Link to={"/"} className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Home</Link>
                              <Link to={"/about"} className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">About</Link>
                              <Link to={"/services"} className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Services</Link>
                              <Link to={"/contactus"} className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Contact us</Link>
                         </div>
                    </div>
               </div>

               <div className="flex md:flex-row flex-col lg:w-[40%] w-full justify-between gap-y-6">
                    <div className="flex flex-col gap-y-4">
                         <h1 className="text-white font-semibold text-lg">Services</h1>
                         <div className="flex flex-col gap-y-3">
                              <Link className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Frontend</Link>
                              <Link className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Backend</Link>
                              <Link className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Full Stack</Link>
                              <Link className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">UI/UX</Link>
                              <Link className="text-white/65 hover:text-cyan-400 ease-in-out duration-200">Ecommere website</Link>
                         </div>
                    </div>

                    <div className="flex flex-col gap-y-4">
                         <h1 className=" text-white font-semibold text-lg">Contact</h1>
                         <div className="flex flex-col gap-y-3">
                              <div  className="flex items-center justify-center text-teal-500 gap-x-2">
                                   <IoLocationSharp className="text-white font-bold text-3xl " />
                                   <div className="flex flex-col text-sm ">
                                          <p className="text-sm">NIT JAMSHEDPUR, ADITYAPUR,</p>
                                         <p>SARAIKELA KHARSAWAN,831014</p>
                                   </div>
                              
                              </div>
                              <div  className="flex items-center gap-x-2">
                                   <HiOutlineDevicePhoneMobile className="text-white font-bold text-3xl"/>
                                   <div className="flex flex-col">
                                        <p className="text-teal-500 ">+91 1234567890</p>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
              </div>
               
               
          </div>
            
         )
}

export default Footer;