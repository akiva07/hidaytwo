"use client";
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { useMotionValue, useTransform, motion } from 'framer-motion'

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100,100],[30,-30]);
  const rotateY = useTransform(y, [-100,100],[-30,30]);

  return (
    <div style={{perspective: 2000}}>
      <div  
        

        className="w-full bg-[#F7F6F2] h-screen flex items-center justify-center">
        
        <motion.div 
          style = {{x, y, rotateX, rotateY, z:100}}
          drag
          dragElastic={0.18}
          dragConstraints={{top: 0, left: 0, right: 0,bottom: 0}}
          whileTap={{cursor: 'grabbing'}}
          className="w-[426px] min-h-[500px] bg-[#4B6587] rounded-xl border-[4px] border-[#8b9baf]
          px-[40] py-[24px] text-white cursor-grab relative">
            <div className="py-6 px-6 font-sans">
              <Link href="/users">Users List</Link><br />
              <Link href="/showcases">Showcase Projects</Link>
            </div>
            

            <motion.div 
              style = {{x, y, rotateX, rotateY, z:100000}}
              className="absolute -top-32 left-72 w-[624px]">
                <h1 className="text-xl"></h1>
            {/* <Image
                src="/two-sign.svg"
                width={150}
                height={100}
                className="ml-4"
                alt="car logo"
                draggable="false"
            /> */}
            </motion.div>

        </motion.div>
       

        
          
          {/* <ProductCard /> */}
        
        
      </div>
      
    </div>
  )
}
