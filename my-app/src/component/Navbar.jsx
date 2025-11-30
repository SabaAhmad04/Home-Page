import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { ImMenu } from "react-icons/im";
import logo from "../assets/logo2.jpg"
import StarBorder from "./TextStartBorder";
import { ImCross } from "react-icons/im";
import Menu from "./Menu";


const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false);
    const[isVisible,setIsVisible] = useState(true);
    const[isScrolled,setIsScrolled] = useState(false);
    
    const navRef = useRef(null);

    useEffect(() => {
         const checkScrolled = () => {
                const scrolled = window.scrollY > 35;
                setIsScrolled(scrolled);
         }

         checkScrolled();
         window.addEventListener("scroll",checkScrolled);

         return () => {
             window.removeEventListener("scroll",checkScrolled);
         };
    },[]);

    useEffect(() => {
           const checkVisibility = () => {
                   const isMobile = window.innerWidth < 840;
                   setIsOpen(!isMobile);
           };

           checkVisibility();
           window.addEventListener("resize",checkVisibility);
           return () => {
               window.removeEventListener("resize",checkVisibility);
           }
    },[])

    return(
        <div className={`w-full relative flex justify-center items-center ${isScrolled || !isVisible ? "bg-gray-950" : ""}`}>
        <div 
        ref={navRef}
        className="flex flex-row items-center  justify-between text-xl w-[90%] font-semibold h-[80px]">
            <div className="flex flex-row gap-x-3 items-center h-full">
                <div className={`${!isOpen && !isVisible ? "block" : "hidden"}`}>
                    <Menu isOpen={isOpen} isVisible={isVisible} setIsVisible={setIsVisible}></Menu>
                </div>
                <Link to="/">
                    <img  className="md:w-[80px] md:h-[80px] w-[55px] h-[55px]" src={logo}/>
                </Link>
                <div className="text-white font-bold ">
                    <Link to="/" className="md:font-extrabold text-xl font-bold ">
                         KODEHEIMER
                    </Link>
                </div>
                
            </div>
            <div className="flex">
                <div className="">
                    <button
                    className={`${!isOpen  ? "block" : "hidden"} flex justify-center items-center w-12 h-12`}>
                        <ImMenu
                        onClick={() => setIsVisible(!isVisible)}
                        className={`absolute transition-all duration-300 ease-in-out text-xl text-white cursor-pointer
                                    ${isVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"}`}/>
                        <ImCross 
                        onClick={() => setIsVisible(!isVisible)}
                        className={`absolute transition-all duration-300 ease-in-out text-xl text-white cursor-pointer
                                     ${isVisible ? "opacity-0 rotate-90 scale-75" : "opacity-100 -rotate-0 scale-100"}`}/>
                    </button>
                </div>
                <div className={`${isOpen ? "flex" : "hidden"} w-full flex-row lg:gap-x-10 md:gap-x-8 text-white`}>
                    <button><Link to = {'/'} className={`${isScrolled ? "font-bold " : "font-medium text-cyan-500"}`}>
                        <StarBorder
                            as="button"
                            className="custom-class cursor-pointer"
                            color = "magenta"
                            speed = "2s"
                        >
                            Home
                        </StarBorder>
                    </Link></button>
                    <button><Link to = {'/about'} className={`${isScrolled ? "font-bold" :"font-medium text-cyan-500"}`}>
                        <StarBorder
                            as="button"
                            className="custom-class cursor-pointer"
                            color = "magenta"
                            speed = "2s"
                        >
                            About
                        </StarBorder>
                    </Link></button>
                    <button><Link to = {'/services'}  className={`${isScrolled ? "font-bold" :"font-medium text-cyan-500"}`}>
                        <StarBorder
                            as="button"
                            className="custom-class cursor-pointer"
                            color = "magenta"
                            speed = "2s"
                        >
                            Services
                        </StarBorder>
                    </Link></button>
                    <Link to = {'/contactus'}  className={`${isScrolled ? "text-[17px]" : "text-[16px]"} glow-contactUs w-[110px]`}>
                            Contact Us
                    </Link>
                </div>
            </div>
        </div>
        
        </div>
    )
}
export default Navbar;