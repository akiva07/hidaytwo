import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { link } from "fs";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div>
            <Image 
                src="/next.svg"
                alt="Car Hub Logo"
                width={100}
                height={18}
                className="object-contain"
            />
            <p className="text-gray-700 text-xs">Dev mod 2023 <br />All rights reserved &copy;  
            </p>
        </div>

        <div className="footer_link">
            {footerLinks.map((link) => (
                <div key={link.title} className="text-stone-600">
                    <h4>{link.title}</h4>
                    {link.links.map((item) => (
                        <Link
                            key={item.title}
                            href={item.url}
                            className="font-sm text-black-500"
                        >
                            {item.title}
                        </Link>
                    ))}
                    
                    
                </div>
            ))}
        </div>
        
    </footer>
  )
}

export default Footer