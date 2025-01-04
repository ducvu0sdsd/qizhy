import { mainColor } from '@/utils/main'
import React from 'react'

const Search = () => {
    return (
        <div className="flex flex-col items-center w-full mt-4">
            <span className="text-[30px] font-semibold mb-2">Find the designs you are looking for</span>
            <span className="text-[14px]">I hope that my designs will inspire creativity and bring fresh ideas to</span>
            <span className="text-[14px]">your projects.</span>
            <div className="mt-4 w-full flex justify-center">
                <div className="w-[35%] relative">
                    <input style={{ border: `2px solid ${mainColor}` }} placeholder="What are you looking for?" className="py-[12px] w-[100%] focus:outline-none pl-4 pr-14 rounded-3xl text-[13px]" />
                    <button className="bx bx-search-alt transition-all hover:scale-[1.1] text-[white] p-[6px] absolute right-[8px] top-[50%] translate-y-[-50%] text-[22px] rounded-full" style={{ backgroundColor: mainColor }} />
                </div>
            </div>
        </div>
    )
}

export default Search