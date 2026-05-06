import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const speakers = [
  { year: "YEAR 11", name: "Zahra Datoo", topic: "Nostalgia" },
  { year: "YEAR 10", name: "Liyaan Karbelkar", topic: "The wealth you leave behind" },
  { year: "YEAR 10", name: "Zahra Moledina", topic: "Silence is never empty" },
  { year: "YEAR 10", name: "Hassan Abbas Muhammad", topic: "Procrastination" },
  { year: "YEAR 9", name: "Sada Mbaruk", topic: "The end of the world" },
  { year: "YEAR 9", name: "Anaya Rashid", topic: "Culture of time" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative z-10 py-32">
      {/* Vertical Progress Indicator (Emons-style) */}
      <div className="fixed left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-40">
        {speakers.map((s, i) => (
          <a key={s.name} href={`#speaker-${i}`} className="flex items-center gap-4 group cursor-pointer opacity-30 hover:opacity-100 transition-all">
            <div className={`h-8 transition-all ${i === 0 ? 'w-1 bg-ted-red' : 'w-0.5 bg-white'}`} />
            <span className="text-[10px] uppercase tracking-widest text-white whitespace-nowrap">
              {String(i + 1).padStart(2, '0')} {s.topic.split(' ')[0]}
            </span>
          </a>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col space-y-64">
          {speakers.map((speaker, index) => (
            <SpeakerItem key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SpeakerProps {
  speaker: { year: string; name: string; topic: string };
  index: number;
  key?: string;
}

function SpeakerItem({ speaker, index }: SpeakerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);
  
  const nameParts = speaker.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <motion.div
      ref={containerRef}
      id={`speaker-${index}`}
      style={{ opacity, y }}
      className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="text-ted-red font-mono text-sm tracking-tighter">{speaker.year}</span>
        <div className="h-[1px] w-12 bg-white/20"></div>
        <span className="text-white/40 uppercase text-[10px] tracking-[0.3em]">Speaker {String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none">
        {firstName} <span className="font-bold">{lastName}</span>
      </h3>
      
      <p className="text-white/40 text-xl md:text-3xl font-light italic mb-12 tracking-wide max-w-2xl">
        "{speaker.topic}"
      </p>

      <button className="group flex items-center gap-4 border border-white/20 rounded-full pl-6 pr-2 py-2 hover:border-ted-red transition-colors">
        <span className="text-[10px] uppercase tracking-widest font-bold">View Presentation</span>
        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-ted-red group-hover:text-white transition-all">
          <ArrowRight size={16} />
        </div>
      </button>
    </motion.div>
  );
}
