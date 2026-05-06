import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

export default function EmailSignup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      <button
        id="signup-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 glass group flex items-center gap-4 rounded-full pl-6 pr-2 py-2 hover:border-ted-red transition-all shadow-2xl"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Sign Up</span>
        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-ted-red group-hover:text-white transition-all">
          <Send size={16} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass rounded-3xl p-12 shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.5em] text-ted-red">Stay Updated</span>
                <h2 className="mt-4 font-sans text-4xl font-light tracking-tight leading-none">
                  JOIN THE <span className="font-bold">VOID</span>
                </h2>
                <p className="mt-4 text-white/40 text-sm leading-relaxed">
                  Join the waitlist for exclusive access to attendee registration and early speaker reveals.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ted-red transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-3 text-ted-red hover:text-white transition-colors p-1"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
