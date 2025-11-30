import React, { useEffect, useState } from "react";
import Image1 from "../assets/Image1.jpg"
import Image2 from "../assets/Image2.jpg"
import Image3 from "../assets/Image3.jpg"


const Images = [
    {
        Image : `${Image1}`,
        title : "CraftX Frontend",
        text : `Crafting visually stunning,
                user-friendly interfaces for
                seamless digital experiences.`
    },
    {
        Image : `${Image2}`,
        title : "CraftX Backend",
        text : `Building robust, secure, and
            scalable server-side solutions
            that power innovation.`
    },
    {
        Image : `${Image3}`,
        title : "CraftX Full Stack",
        text : `Delivering end-to-end web 
                solutions with flawless integration 
                integration and high performance.`
    }
];
const ImageSlider = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    useEffect( () => {
        const interval = setInterval( () => {
            //setCurrentIndex((prevIndex == Images.length) ? 0 : (prevIndex+1))
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
        },6000)
    },[])
    return(
        // <img src={Images[currentIndex]}/>
        <div 
        className="w-full h-screen flex bg-cover bg-center transition-all duration-200 ease-in-out"
        style={{backgroundImage : `url(${Images[currentIndex].Image})`}}>
            <div className="w-[390px] flex flex-col mx-auto justify-center mt-72 mr-60 text-white transition-all duration-1000 ease-in-out">
                <div>
                    <h1 className="text-5xl font-bold">{Images[currentIndex].title}</h1>
                </div>
                <div className="whitespace-pre-line mt-3 font-semibold">
                    <h2 className="text-xl">{Images[currentIndex].text}</h2>
                </div>
                <div className="bg-white w-[100px] rounded-full hover:bg-white/0 mt-2 -ml-1 text-center">
                    <button className="text-blue-300 text-sm hover:text-gray-500 hover:border-gray-500 hover:border-[1px] 
                                        py-2 px-2 hover:rounded-full font-medium ">
                        Know More
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default ImageSlider