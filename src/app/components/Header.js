'use client';

import Link from "next/link";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {

    const [viewNav, setViewNav] = useState(false);

    const list = <>
        <li> <Link href={'/'} > Home</Link></li>
        <li> <Link href={'/about'} > About</Link></li>
        <li> <Link href={'/movie'} > Movie</Link></li>
        <li> <Link href={'/contact'} > Contact Us</Link></li>
    </>


    return (
        <header className="relative" >
            <div className="md:hidden absolute right-3 top-3 z-30" >
                <button
                    onClick={() => setViewNav(!viewNav)}
                    className="text-xl"
                >
                    {
                        viewNav ?
                            <AiOutlineClose />
                            :
                            <AiOutlineMenu />
                    }
                </button>
            </div>
            <nav className="flex items-center justify-between md:px-20 px-5 md:py-5 py-2 shadow-2xl bg-[#fdfdfd]">
                <Link href={'/'} ><h1 className="md:text-3xl text-xl font-bold text-[#383CC1]" >MovieTime</h1></Link>
                <div className="md:block hidden" >
                    <ul className="flex gap-5 font-bold text-slate-700" >
                        {list}
                    </ul>
                </div>
                <div className="md:hidden" >
                    {
                        viewNav &&
                        <ul className="fixed top-0 right-0 left-0 bottom-0 z-20 bg-white h-screen" >
                            <div className="absolute left-1/2 top-52 -translate-x-1/2 translate-y-1/2 text-xl text-center space-y-3 font-bold"
                            onClick={()=>setViewNav(false)}
                            >
                                {list}
                            </div>
                        </ul>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;