import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { link } from "fs";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4B6587]">
    <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image 
                    src="/next.svg"
                    alt="Car Hub Logo"
                    width={100}
                    height={18}
                    className="object-contain"
                />
                <p className="text-[#F7F6F2] text-base">Dev mod 2023 <br />All rights reserved &copy;  
                </p>    
            </div>
            
            
        </div>

        <div className="footer__links">
            {footerLinks.map((link) => (
                <div key={link.title} className="text-[#F7F6F2] footer__link">
                    <h4 className="font-bold text-[#F7F6F2]">{link.title}</h4>
                    {link.links.map((item) => (
                        <Link
                            key={item.title}
                            href={item.url}
                            className="font-sm text-[#F7F6F2]"
                        >
                            {item.title}
                        </Link>
                    ))}
                    
                    
                </div>
            ))}
        </div>
    </div>
        
    </footer>
  )
}

export default Footer