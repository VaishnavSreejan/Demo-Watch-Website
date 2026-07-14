import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Anchor, Award } from 'lucide-react'

function BrandIntroduction() {
  const appleEase = [0.16, 1, 0.3, 1]

  const stats = [
    {
      icon: <Cpu size={22} className="text-gold" />,
      title: "SWISS MADE",
      value: "100%",
      desc: "Fully manufactured and certified in Bienne, Switzerland."
    },
    {
      icon: <ShieldCheck size={22} className="text-gold" />,
      title: "PREMIUM MATERIALS",
      value: "904L",
      desc: "Surgical-grade steel, solid 18K gold casing, and natural sapphire."
    },
    {
      icon: <Award size={22} className="text-gold" />,
      title: "GLOBAL WARRANTY",
      value: "5 YR",
      desc: "An extended testament to our horological durability and quality."
    },
    {
      icon: <Anchor size={22} className="text-gold" />,
      title: "CRAFTSMANSHIP",
      value: "HAND",
      desc: "Each bezel and indicator is polished and set manually by masters."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      {/* Editorial Title */}
      <div className="text-center mb-16 md:mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold"
        >
          THE ART OF ORA
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase, delay: 0.15 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight max-w-5xl mx-auto"
        >
          Where Opulence <br className="hidden md:inline" /> Meets <span className="text-gold-gradient font-normal italic">Timekeeping</span>
        </motion.h2>
      </div>

      {/* Two Column Layout: Text & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
        {/* Left Story Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          <h3 className="font-serif text-2xl text-white tracking-wider">
            Italian Elegance, Calibrated to Swiss Perfection
          </h3>
          <div className="w-16 h-0.5 bg-gold"></div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Born from a vision where classical Roman architectural form meets modern Italian high-fashion, Aurelius Ora redefines the luxury watch landscape. We invite those with a taste for bold visual statements to explore timepiece geometry unlike any other.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Each timepiece is built under the rigid regulations of Swiss certification. By pairing our striking Versace-inspired aesthetics—marked by the structural Greca pattern and Roman numerals—with high-frequency automatic movements, we deliver horology that is as mechanically rigorous as it is visually breathtaking.
          </p>
          <div className="pt-4">
            <a 
              href="#collections" 
              className="inline-flex items-center text-[10px] tracking-[0.25em] text-gold font-semibold uppercase hover:text-white transition-colors duration-300 relative group"
            >
              <span>DISCOVER THE HERITAGE</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: appleEase, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent rounded-sm filter blur-2xl z-0"></div>
          <div className="relative z-10 border gold-border p-2 bg-luxury-charcoal/50 rounded-sm hover-shine-container">
            <img 
              src="/assets/luxury_watch_craftsmanship.png" 
              alt="Swiss watchmaking craftsmanship detail" 
              className="w-full h-[320px] md:h-[450px] object-cover rounded-sm filter brightness-90 hover:brightness-100 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: appleEase, delay: index * 0.1 }}
            className="p-6 luxury-glass luxury-glass-hover rounded-sm flex flex-col justify-between h-48 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-gold/15 transition-all duration-500"></div>
            
            <div className="flex justify-between items-center">
              <div className="p-2.5 bg-luxury-black border border-luxury-gray rounded-sm group-hover:border-gold/30 transition-colors">
                {stat.icon}
              </div>
              <span className="font-serif text-xl text-gold/40 group-hover:text-gold transition-colors duration-500 font-bold">
                {stat.value}
              </span>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-white">
                {stat.title}
              </h4>
              <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                {stat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BrandIntroduction
