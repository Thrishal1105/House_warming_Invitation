import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, Clock, Utensils, Heart, ChevronDown } from 'lucide-react';

// --- Components ---

const Lantern = () => {
  const [position] = useState({
    x: Math.random() * 100,
    size: Math.random() * (25 - 10) + 10,
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
  <div className="flex items-center justify-center gap-2 sm:gap-4 my-8 sm:my-10 opacity-30">
    <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#B68D40]" />
    <div className="w-2 h-2 rotate-45 border border-[#B68D40] shrink-0 fill-[#B68D40]" />
    <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#B68D40]" />
  </div>
);

// --- Main App ---

function App() {
  const [lanterns] = useState(Array.from({ length: 30 }, (_, i) => i));

  return (
    <div className="parchment-bg min-h-screen w-full overflow-x-hidden selection:bg-gold selection:text-white">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        
        {/* Animated Background Image (Zoom Effect) */}
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dalmvzwgj/image/upload/q_auto/f_auto/v1776489396/hero-bg-wide_oky8oc.jpg")' }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-10" />

        {/* Floating Lantern Layer */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {lanterns.map((i) => (
            <Lantern key={i} />
          ))}
        </div>

        {/* Floating Invitation Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: 1, 
            y: [0, -15, 0] // Gentle "hover" floating animation
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1.5, ease: "easeOut" }
          }}
          className="relative z-30 text-center text-white px-4 w-full"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
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
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1, duration: 2 }}
            className="mt-8 sm:mt-12 max-w-md mx-auto border-t border-white/20 pt-6 sm:pt-8 px-4"
          >
            <p className="italic font-light text-base sm:text-xl text-white/90">With the divine blessings of Lord Ganesha,</p>
            <p className="mt-2 sm:mt-3 font-light leading-relaxed text-sm sm:text-base text-white/80">we cordially invite you to join us on this auspicious occasion as we step into our new home.</p>
          </motion.div>
        </motion.div>

        

        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#F5E6CA] to-transparent z-10" />
      </div>

      {/* 2. THE CEREMONY DETAILS (Applied Option 1: Royal Heritage) */}
      <Section id="ceremony">
        <h2 className="text-3xl sm:text-5xl heritage-gold mb-4 sm:mb-6">The Ceremony</h2>
        <Divider />
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-16 mt-8 sm:mt-16 px-2">
          <div className="group text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#800000]/20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#800000]/5 group-hover:border-[#800000] transition-all duration-500">
              <Calendar className="heritage-red w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <p className="font-cinzel text-[10px] sm:text-xs tracking-widest opacity-60 uppercase mb-1 sm:mb-2 heritage-gold">Auspicious Date</p>
            <p className="text-xl sm:text-3xl font-light">Monday, 20th April 2026</p>
          </div>

          <div className="hidden md:block h-24 w-[1px] bg-[#B68D40]/30" />

          <div className="group text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#800000]/20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#800000]/5 group-hover:border-[#800000] transition-all duration-500">
              <Clock className="heritage-red w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <p className="font-cinzel text-[10px] sm:text-xs tracking-widest opacity-60 uppercase mb-1 sm:mb-2 heritage-gold">Muhurtham</p>
            <p className="text-xl sm:text-3xl font-light">05:30 AM Onwards</p>
          </div>
        </div>
      </Section>

      {/* 3. RITUALS SECTION */}
      <Section className="bg-[#B68D40]/5 rounded-[2rem] sm:rounded-[4rem] border border-[#B68D40]/10 shadow-inner px-4 overflow-hidden">
        <h2 className="text-2xl sm:text-4xl heritage-gold mb-4 sm:mb-6">Auspicious Rituals</h2>
        <Divider />
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mt-8 sm:mt-12 text-sm sm:text-base">
          <div className="p-6 sm:p-10 border border-[#B68D40]/20 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-md shadow-sm">
            <h3 className="text-lg sm:text-2xl mb-2 sm:mb-4 heritage-red">Satyanarayana Swamy</h3>
            <p className="opacity-80 italic">Followed by traditional housewarming rituals and divine blessings from elders.</p>
          </div>
          <div className="p-6 sm:p-10 border border-[#B68D40]/20 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-md shadow-sm">
            <Utensils className="mx-auto mb-4 sm:mb-6 heritage-red w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-lg sm:text-2xl mb-2 sm:mb-4 heritage-gold">Festive Lunch</h3>
            <p className="text-xl sm:text-3xl font-light">01:15 PM Onwards</p>
            <p className="mt-2 sm:mt-3 opacity-70">Please join us for a traditional feast to share our happiness.</p>
          </div>
        </div>
      </Section>

      {/* 4. ADDRESS SECTION */}
      <Section>
        <MapPin className="mx-auto mb-6 sm:mb-8 heritage-red w-8 h-8 sm:w-12 sm:h-12" />
        <h2 className="text-3xl sm:text-5xl heritage-gold mb-6 sm:mb-8">Location</h2>
        <div className="max-w-xl mx-auto px-2">
          <p className="text-xl sm:text-3xl mb-2 sm:mb-4 font-cinzel opacity-80">The Residence</p>
          <address className="text-base sm:text-xl not-italic opacity-90 leading-relaxed font-light mb-8 sm:mb-12">
            Madugu Nagar Colony, Near Hanuman Temple,<br />
            Kotha Cheruvu Road, New Gunj,<br />
            Mahabubnagar - 509001
          </address>
          <motion.a 
            href="https://maps.app.goo.gl/hEHzk45cvn4kQCdAA" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#800000', color: '#fff', borderColor: '#800000' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 sm:px-14 py-4 sm:py-5 border-2 border-[#800000] text-[#800000] font-cinzel text-xs sm:text-sm tracking-[0.2em] font-bold rounded-full transition-all duration-300 shadow-sm"
          >
            Open in Google Maps
          </motion.a>
        </div>
      </Section>

      {/* 5. HOSTS SECTION */}
      <Section className="mb-20 sm:mb-32">
        <Heart className="mx-auto mb-6 sm:mb-8 heritage-red w-8 h-8 sm:w-10 sm:h-10 fill-[#800000]/10" />
        <h2 className="text-lg sm:text-2xl opacity-60 font-cinzel mb-2 sm:mb-4 tracking-[0.2em] sm:tracking-[0.3em] heritage-gold">Invited By</h2>
        <p className="text-2xl sm:text-5xl md:text-7xl font-cinzel heritage-red font-bold mb-8 sm:mb-12 px-2 drop-shadow-sm">Mrs. Mangamma & Mr. Yellaiah</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 group cursor-pointer bg-white/20 p-4 rounded-xl shadow-sm border border-transparent hover:border-[#B68D40]/30 transition-all">
            <div className="p-2 sm:p-3 rounded-full bg-[#800000]/10 group-hover:bg-[#800000]/20 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 heritage-red" />
            </div>
            <p className="text-base sm:text-xl font-light">+91 6300139286</p>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 group cursor-pointer bg-white/20 p-4 rounded-xl shadow-sm border border-transparent hover:border-[#B68D40]/30 transition-all">
            <div className="p-2 sm:p-3 rounded-full bg-[#800000]/10 group-hover:bg-[#800000]/20 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 heritage-red" />
            </div>
            <p className="text-base sm:text-xl font-light">+91 8142113236</p>
          </div>
        </div>
      </Section>

      {/* 6. FOOTER */}
      <footer className="relative py-20 sm:py-32 text-center parchment-bg border-t border-[#B68D40]/20 overflow-hidden px-4">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Lantern />
          <Lantern />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xl sm:text-3xl font-cinzel heritage-gold mb-6 sm:mb-8">Bless Our New Home</p>
          <p className="text-base sm:text-xl opacity-80 italic leading-relaxed font-light px-2">
            "Your gracious presence and heartfelt blessings will add to our joy as we embark on this new chapter of our lives."
          </p>
          <Divider />
          <p className="mt-8 sm:mt-12 font-cinzel tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs opacity-50 uppercase heritage-red">Mahabubnagar | 2026</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
