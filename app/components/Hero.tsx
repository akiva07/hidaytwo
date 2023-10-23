"use client"
import Image from "next/image"
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {}  
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
                Find, Book Schowcase or rent !
            </h1>
            <p className="sm:text-[32px] text-[32 px]">sdsa asdasdoasjd andjnau Wi dsa dasd ndasnd adlaknda</p>

            <CustomButton
                title="Explore showcases" 
                containerStyles="bg-sky-500 hover:bg-sky-700 rounded-full rounded-full px-3 mt-5"
                handleClick={handleScroll}            
            />
        </div>

    </div>
  )
}

export default Hero