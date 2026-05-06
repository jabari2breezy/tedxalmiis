/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import VideoBackground from './components/VideoBackground';
import Navbar from './components/Navbar';
import Speakers from './components/Speakers';
import EmailSignup from './components/EmailSignup';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-void-black font-sans selection:bg-ted-red selection:text-white overflow-x-hidden">
      <VideoBackground />
      <Navbar />
      <EmailSignup />

      {/* Right-side Rail Text */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right z-40 hidden lg:block">
        <span className="text-[9px] uppercase tracking-[0.8em] text-white/20 whitespace-nowrap">
          TIME &bull; CULTURE &bull; NOSTALGIA &bull; LEGACY
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6 flex items-center gap-4"
          >
             <span className="h-px w-12 bg-ted-red" />
             <span className="font-mono text-sm uppercase tracking-[0.5em] text-white/50">TEDxAlMuntazir</span>
             <span className="h-px w-12 bg-ted-red" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="text-7xl font-light uppercase tracking-tighter md:text-[10rem] lg:text-[14rem] leading-none"
          >
            TIME<span className="font-bold">LESS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 max-w-xl text-lg font-light tracking-wide text-white/40 text-balance"
          >
            Entering the void where time dissolves into ideas. A journey through the past, 
            present, and future of human expression.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-12"
          >
            <div className="animate-bounce">
              <div className="h-16 w-px bg-gradient-to-b from-ted-red to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Large Decorative Background Typography */}
        <div className="absolute right-0 bottom-0 select-none opacity-[0.02] text-[20rem] font-black leading-none transform translate-y-1/4 pointer-events-none">
          TIME
        </div>
      </section>

      {/* Content Section with Stats Footer */}
      <div className="relative">
        <div className="sticky top-0 h-screen pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-void-black via-transparent to-void-black opacity-80" />
        </div>
        
        <div className="relative z-10 transition-colors">
          <Speakers />
        </div>

        {/* Bottom Bar: Stats & Meta */}
        <footer className="p-12 md:p-24 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/5 bg-void-black/80 backdrop-blur-md gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-16">
            <div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1 font-mono">Location</div>
              <div className="text-xs font-medium tracking-wide">AL MUNTAZIR AUDITORIUM</div>
            </div>
            <div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1 font-mono">Date</div>
              <div className="text-xs font-medium tracking-wide">MAY 20, 2026</div>
            </div>
            <div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1 font-mono">Status</div>
              <div className="text-xs font-medium tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ted-red animate-pulse" />
                ACTIVE
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-4xl font-black opacity-5 mb-2">VOID</h4>
            <p className="max-w-md text-white/20 uppercase tracking-[0.2em] font-mono text-[9px]">
              TEDxAlMuntazir 2026 — ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

