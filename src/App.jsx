import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, Clock, Utensils, Heart } from 'lucide-react';

// --- Components ---

const Lantern = () => {
  const [position] = useState({
    x: Math.random() * 100,
    size: Math.random() * (25 - 10) + 10, // Slightly smaller for better mobile performance
    duration: Math.random() * (20 - 12) + 12,
    delay: Math.random() * 20,
  });

  return (
    <motion.div
      initial={{ y: '110vh', x: `${position.x}vw`, opacity: 0 }}
      animate={{
        y: '-20vh',
        opacity: [0, 0.7, 0.7, 0],
        x: [`${position.x}vw`, `${position.x + (Math.random() * 8 - 4)}vw`],
      }}
      transition={{
        duration: position.duration,
        delay: position.delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute pointer-events-none"
      style={{
        width: position.size,
        height: position.size * 1.4,
        background: 'radial-gradient(circle, #ffca3a 0%, #ff5e00 80%, transparent 100%)',
        borderRadius: '50% 50% 30% 30%',
        boxShadow: '0 0 10px #ff9d00',
        zIndex: 1,
      }}
    />
  );
};

const Section = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className={`relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 text-center ${className}`}
  >
    {children}
  </motion.section>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-2 sm:gap-4 my-8 sm:my-10 opacity-40">
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-gold" />
    <div className="w-2 h-2 rotate-45 border border-gold shrink-0" />
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-gold" />
  </div>
);

// --- Main App ---

function App() {
  const [lanterns] = useState(Array.from({ length: 30 }, (_, i) => i));

  return (
    <div className="parchment-bg min-h-screen w-full overflow-x-hidden selection:bg-gold selection:text-white">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        {/* Palace Zoom Animation */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dalmvzwgj/image/upload/q_auto/f_auto/v1776433273/hero-bg_hlgg77.jpg")' }}
        />
        
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Floating Lantern Layer */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {lanterns.map((i) => (
            <Lantern key={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-20 text-center text-white px-4 w-full"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-cinzel text-base sm:text-xl gold-text mb-4 sm:mb-8"
          >
            II Shri Ganesh II
          </motion.p>
          
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-4 sm:mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] leading-tight px-2">
            Gruha Pravesh
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl font-cinzel gold-text tracking-[0.2em] sm:tracking-[0.4em] font-light">
            Invitation
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 2 }}
            className="mt-12 sm:mt-20 max-w-md mx-auto border-t border-white/20 pt-6 sm:pt-10 px-4"
          >
            <p className="italic font-light text-base sm:text-xl">With the divine blessings of Lord Ganesha,</p>
            <p className="mt-2 sm:mt-3 font-light leading-relaxed text-sm sm:text-base">we cordially invite you to join us on this auspicious occasion as we step into our new home.</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
        >
          <div className="w-[1px] h-10 sm:h-16 bg-gradient-to-b from-white to-transparent mx-auto" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-cream to-transparent z-10" />
      </div>

      {/* 2. THE CEREMONY DETAILS */}
      <Section>
        <h2 className="text-3xl sm:text-5xl gold-text mb-4 sm:mb-6">The Ceremony</h2>
        <Divider />
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-16 mt-8 sm:mt-16 px-2">
          <div className="group text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
              <Calendar className="text-gold w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <p className="font-cinzel text-[10px] sm:text-xs tracking-widest opacity-50 uppercase mb-1 sm:mb-2">Auspicious Date</p>
            <p className="text-xl sm:text-3xl font-light">Monday, 20th April 2026</p>
          </div>

          <div className="hidden md:block h-24 w-[1px] bg-gold/20" />

          <div className="group text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
              <Clock className="text-gold w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <p className="font-cinzel text-[10px] sm:text-xs tracking-widest opacity-50 uppercase mb-1 sm:mb-2">Muhurtham</p>
            <p className="text-xl sm:text-3xl font-light">05:30 AM Onwards</p>
          </div>
        </div>
      </Section>

      {/* 3. RITUALS SECTION */}
      <Section className="bg-gold/5 rounded-[2rem] sm:rounded-[4rem] border border-gold/10 shadow-inner px-4">
        <h2 className="text-2xl sm:text-4xl mb-4 sm:mb-6">Auspicious Rituals</h2>
        <Divider />
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mt-8 sm:mt-16 text-sm sm:text-base">
          <div className="p-6 sm:p-10 border border-gold/10 rounded-2xl sm:rounded-3xl bg-white/60 backdrop-blur-md shadow-sm">
            <h3 className="text-lg sm:text-2xl mb-2 sm:mb-4 gold-text">Satyanarayana Swamy</h3>
            <p className="opacity-80 italic">Followed by traditional housewarming rituals and divine blessings.</p>
          </div>
          <div className="p-6 sm:p-10 border border-gold/10 rounded-2xl sm:rounded-3xl bg-white/60 backdrop-blur-md shadow-sm">
            <Utensils className="mx-auto mb-4 sm:mb-6 text-gold w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-lg sm:text-2xl mb-2 sm:mb-4 gold-text">Festive Lunch</h3>
            <p className="text-xl sm:text-3xl font-light">01:15 PM Onwards</p>
            <p className="mt-2 sm:mt-3 opacity-60">Please join us for a traditional feast.</p>
          </div>
        </div>
      </Section>

      {/* 4. ADDRESS SECTION */}
      <Section>
        <MapPin className="mx-auto mb-6 sm:mb-8 text-gold w-8 h-8 sm:w-12 sm:h-12" />
        <h2 className="text-3xl sm:text-5xl mb-6 sm:mb-8">Location</h2>
        <div className="max-w-xl mx-auto px-2">
          <p className="text-xl sm:text-3xl mb-2 sm:mb-4 font-cinzel">The Residence</p>
          <address className="text-base sm:text-xl not-italic opacity-80 leading-relaxed font-light mb-8 sm:mb-12">
            Madugu Nagar Colony, Near Hanuman Temple,<br />
            Kotha Cheruvu Road, New Gunj,<br />
            Mahabubnagar - 509001
          </address>
          <motion.a 
            href="https://maps.app.goo.gl/hEHzk45cvn4kQCdAA" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#C9A34E', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 sm:px-12 py-4 sm:py-5 border-2 border-gold text-gold font-cinzel text-xs sm:text-sm tracking-[0.2em] font-bold rounded-full transition-colors duration-300"
          >
            Open in Google Maps
          </motion.a>
        </div>
      </Section>

      {/* 5. HOSTS SECTION */}
      <Section className="mb-20 sm:mb-32">
        <Heart className="mx-auto mb-6 sm:mb-8 text-gold w-8 h-8 sm:w-10 sm:h-10 fill-gold/20" />
        <h2 className="text-lg sm:text-2xl opacity-50 font-cinzel mb-2 sm:mb-4 tracking-[0.2em] sm:tracking-[0.3em]">Invited By</h2>
        <p className="text-2xl sm:text-5xl md:text-7xl font-cinzel gold-text font-bold mb-8 sm:mb-12 px-2">Mrs. Mangamma & Mr. Yellaiah</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 group cursor-pointer">
            <div className="p-2 sm:p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            </div>
            <p className="text-base sm:text-xl font-light">+91 630039286</p>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 group cursor-pointer">
            <div className="p-2 sm:p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            </div>
            <p className="text-base sm:text-xl font-light">+91 8142113236</p>
          </div>
        </div>
      </Section>

      {/* 6. FOOTER */}
      <footer className="relative py-20 sm:py-32 text-center parchment-bg border-t border-gold/20 overflow-hidden px-4">
        {/* Subtle lantern particles for footer */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Lantern />
          <Lantern />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xl sm:text-3xl font-cinzel gold-text mb-6 sm:mb-8">Bless Our New Home</p>
          <p className="text-base sm:text-xl opacity-70 italic leading-relaxed font-light">
            "Your gracious presence and heartfelt blessings will add to our joy as we embark on this new chapter of our lives."
          </p>
          <Divider />
          <p className="mt-8 sm:mt-12 font-cinzel tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs opacity-50 uppercase">Mahabubnagar | 2026</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
