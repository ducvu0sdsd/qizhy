'use client'
import Projects from "@/components/landing/Projects";
import Search from "@/components/landing/Search";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ x: 1920 * -1 }}
      animate={{ x: 0 }}
      exit={{ x: 1920 * -1, transition: { duration: 0.2 } }}
    >
      <main className="flex flex-col items-center w-full">
        <Navbar />
        <Search />
        <Projects />
      </main>
    </motion.div>
  );
}
