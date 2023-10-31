import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src="/next.svg"
                    alt="Car Hub Logo"
                    width={100}
                    height={18}
                    className="object-contain"
                />
            </Link>

            <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles="bg-[#4B6587] text-white inline-block rounded-full bg-[primary-100] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            />
        </nav>
    
    </header>
  )
}

export default Navbar