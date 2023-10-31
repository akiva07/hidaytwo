"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton  from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="car-card group">
    
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>   

        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
                Rp
            </span>
            45.000,-
            <span className="self-end text-[14px] font-medium">
                /day
            </span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
        <Image 
            src="/next.svg"
            alt="car model"
            width={50}
            height={50}
            className="object-contain"
        />
        </div>

        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/vercel.svg"
                    width={20}
                    height={20}
                    alt="steering wheel"/>

                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <CustomButton 
                    title="View More"
                    containerStyles="w-full py-[14px]
                    rounded-full bg-blue-400"
                    textStyles="text-white text-[12 px] leading-[17px] font-bold"
                    handleClick={() => setIsOpen(true)} 

                />
            </div>
        </div>

        <CarDetails isOpen={isOpen} closeModal={() =>
        setIsOpen(false)} car={car} />
        
    </div>
  )
}

export default CarCard