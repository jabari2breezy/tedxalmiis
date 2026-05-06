import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center"
    >
      <nav className="glass rounded-full px-8 py-3 flex items-center gap-12">
        <div className="text-ted-red font-bold tracking-tighter text-xl">
          TEDx<span className="text-white font-light ml-1">AlMuntazir</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
          <a href="#" className="text-white border-b border-ted-red pb-1">Home</a>
          <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
          <a href="#" className="hover:text-white transition-colors">Schedule</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>

        <button 
          onClick={() => {
            const signupBtn = document.getElementById('signup-trigger');
            if (signupBtn) signupBtn.click();
          }}
          className="bg-white text-black px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-ted-red hover:text-white transition-all"
        >
          Register
        </button>
      </nav>
    </motion.header>
  );
}
