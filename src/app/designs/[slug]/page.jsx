'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

const page = () => {
    const param = useParams();
    const { slug } = param
    console.log(slug)

    return (
        <motion.div
            initial={{ x: 1920 * -1 }}
            animate={{ x: 0 }}
            exit={{ x: 1920 * -1, transition: { duration: 0.2 } }}
        >
            <main className="flex flex-col items-center w-full">
                <Navbar />
            </main>
        </motion.div>
    )
}

export default page