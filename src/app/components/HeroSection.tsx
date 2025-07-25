'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      <Navbar />
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Consultoria de estudos elétricos: brasileira e especializada no Sistema Interligado Nacional.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Elaboramos estudos elétricos práticos, customizados e tecnicamente consistentes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors"
            >
              Solicite seu Estudo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
            >
              Fale com um Especialista
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
