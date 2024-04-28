import { MdSwitchAccessShortcut } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";


const Header = () => {


    const [opened, setOpen] = useState(false);

    return (
        <header>
            <div className="bg-[#333] p-3">
                <div className='max-w-7xl mx-auto flex justify-between text-white' >
                    <p className='flex items-center gap-2'>
                        <span><MdSwitchAccessShortcut size={25} /></span>
                        <span>Blogger</span>
                    </p>


                    <a href='mailto:sasdaniel9@gmail.com' className='flex items-center gap-2'>
                        <span><AiOutlineMail size={25} /></span>
                        <span>Contact</span>
                    </a>
                </div>
            </div>

            <RiMenuLine
                size={25}
                className="text-[#333] absolute top-[74px] right-7 lg:hidden"
                onClick={() => setOpen(!opened)}
            />

            <aside className="p-5">
                <div className={` max-w-7xl mx-auto 
                    flex flex-col gap-4 
                    lg:flex-row lg:gap-0 lg:justify-between 
                `}>
                    <div>
                        <Link to={'#'} className="px-6 py-3 rounded-lg text-white bg-[#333]">Subscribe</Link>
                    </div>

                    <div className={` ${opened ? 'flex' : 'hidden'} flex-col gap-3 ml-4 py-6
                    lg:flex lg:flex-row lg:py-0 m-0`}>
                        <Link to={''} >About us</Link>
                        <Link to={''} >Categories</Link>
                        <Link to={''} >Profile</Link>
                        <Link to={''} >Signup</Link>
                        <Link to={''} >Login</Link>
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default Header
