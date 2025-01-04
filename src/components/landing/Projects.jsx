import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const Projects = () => {

    const router = useRouter()

    return (
        <div className='w-full px-[5%] grid grid-cols-4 gap-4 h-[500px] mt-8'>
            <div className='flex flex-col h-[205px] w-full rounded-lg overflow-hidden gap-1'>
                <div onClick={() => router.push('/designs/christmas-shop-hero-section')} style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[205px] rounded-lg overflow-hidden gap-1'>
                <div style={{ backgroundImage: `url(https://cdn.dribbble.com/userupload/15292044/file/original-3d42d0f97af8ceac0d265dd3b227e231.jpeg?resize=1504x1128&vertical=center)`, paddingBottom: '56.25%' }} className='w-full rounded-md bg-cover cursor-pointer' />
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center gap-1'>
                        <img src='./user.jpg' className='w-[35px] aspect-square rounded-full cursor-pointer' />
                        <span className='text-[14px] font-semibold'>Extej UI UX Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-[2px]'>
                            <button className='bx bx-heart text-[18px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>230</span>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <button className='fa-regular fa-eye text-[15px] text-[#999]' />
                            <span className='text-[13px] text-[#4b4b4b] font-semibold'>1.6 k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects