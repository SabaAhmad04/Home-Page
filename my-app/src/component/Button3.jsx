import React from 'react'

const Button3 = () => {
  return (
    <div>  
        <button className="cursor-pointer mt-20 relative p-[2px] rounded-md border-0 text-white text-shadow bg-gradient-to-b from-[#006caa] to-[#00c3ff] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0px_6px_12px_0px_rgba(232, 8, 38, 0.45)] active:shadow-none">
            <div className="relative inset-0 p-4 rounded-sm overflow-hidden bg-[radial-gradient(circle_at_50%_100%,#30f8f8_10%,#30f8f800_55%),linear-gradient(#00526a,#009dcd)] transition-all duration-300">
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-[linear-gradient(-65deg,transparent_40%,rgba(255,255,255,0.47)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />

                {/* Top white gradient */}
                <div className="absolute rounded-inherit inset-0 -mx-32 bg-[radial-gradient(circle_at_50%_-270%,#fff_45%,rgba(255,255,255,0.4)_60%,transparent_60%)] transition-all duration-300" />

                {/* Inner shadow (on active) */}
                <div className="absolute inset-0 rounded-inherit transition-all duration-300 active:shadow-[inset_0px_2px_8px_-2px_rgba(0,0,0,0.6)]"></div>

                <span className="relative z-10 font-semibold">OUR SERVICES</span>
            </div>
        </button>
    </div>
  )
}

export default Button3