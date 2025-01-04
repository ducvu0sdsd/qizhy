import { mainColor } from '@/utils/main'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className='flex items-center justify-between relative px-8 py-4 w-full'>
            <div className='flex items-center gap-6'>
                <img src={pathname.includes('/designs/') ? '../../logo.png' : './logo.png'} className='w-[70px]' />
                {['/designs'].includes(pathname) && (
                    <div className="w-[400px] relative">
                        <input style={{ border: `2px solid ${mainColor}` }} placeholder="What are you looking for?" className="py-[12px] w-[100%] focus:outline-none pl-4 pr-14 rounded-3xl text-[13px]" />
                        <button className="bx bx-search-alt transition-all hover:scale-[1.1] text-[white] p-[6px] absolute right-[8px] top-[50%] translate-y-[-50%] text-[22px] rounded-full" style={{ backgroundColor: mainColor }} />
                    </div>
                )}
            </div>
            {(pathname === '/' || pathname.includes('/designs/')) && (
                <div className='flex absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] items-center gap-10 text-[14px]'>
                    <button onClick={() => router.push('/')} style={{ fontWeight: pathname === '/' ? '500' : '400' }}>Home</button>
                    <button onClick={() => router.push('/designs')} style={{ fontWeight: pathname.includes('designs') ? '500' : '400' }}>Designs</button>
                    <button onClick={() => router.push('/about')} style={{ fontWeight: pathname.includes('about') ? '500' : '400' }}>About</button>
                    <button onClick={() => router.push('/creators')} style={{ fontWeight: pathname.includes('creators') ? '500' : '400' }}>Creators</button>
                </div>
            )}
            <div className='flex items-center gap-6 text-[14px]'>
                {['/designs'].includes(pathname) && (
                    <div className='flex items-center gap-10 text-[14px] mr-12'>
                        <button onClick={() => router.push('/')} style={{ fontWeight: pathname === '/' ? '500' : '400' }}>Home</button>
                        <button onClick={() => router.push('/designs')} style={{ fontWeight: pathname.includes('designs') ? '500' : '400' }}>Designs</button>
                        <button onClick={() => router.push('/about')} style={{ fontWeight: pathname.includes('about') ? '500' : '400' }}>About</button>
                        <button onClick={() => router.push('/creators')} style={{ fontWeight: pathname.includes('creator') ? '500' : '400' }}>Creators</button>
                    </div>
                )}
                <button className='bx bx-moon text-[20px] text-[#444444]' />
                <button className='font-semibold'>Sign up</button>
                <button className='text-[white] font-semibold px-4 py-2 rounded-xl' style={{ backgroundColor: mainColor }}>Log in</button>
            </div>
        </div>
    )
}

export default Navbar