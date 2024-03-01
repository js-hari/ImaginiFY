"use client"

import { navLinks } from '@/constants'
import { SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex-size-full flex-col gap-4'>
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28}/>
            </Link>


            <nav className="sidebar-nav">
                <SignedIn>
                    <ul className="sidebar-elements_elements">
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname;
                            return(
                                <li key={link.route} className={`sidebar-nav_elemet group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-70' }`}>
                                    <Link className='sidebar-link' href={link.route}>
                                        <Image 
                                        src={link.icon}
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        className={`${isActive && 'brightness-200'}`}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                        
                    </ul>

                </SignedIn>
            </nav>

        </div>

    </aside>
  )
}

export default Sidebar
