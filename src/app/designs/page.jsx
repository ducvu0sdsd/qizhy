'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
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