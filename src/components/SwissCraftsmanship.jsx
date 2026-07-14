import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Eye, Shield, Compass, Waves, CheckCircle } from 'lucide-react'

function SwissCraftsmanship() {
  const [activeFeature, setActiveFeature] = useState(0)
  const appleEase = [0.16, 1, 0.3, 1]

  const features = [
    {
      icon: <Award size={20} className="text-gold" />,
      title: "Swiss Made Calibre",
      short: "Certified horological origin and calibration.",
      detail: "Undergoing stringent quality inspections in Switzerland, every movement is calibrated to a tolerance of -2/+4 seconds per day, certifying outstanding timekeeping standards."
    },
    {
      icon: <Eye size={20} className="text-gold" />,
      title: "Sapphire Crystal Glass",
      short: "Virtually scratchproof with anti-reflective coating.",
      detail: "Fitted with double-dome synthetic sapphire crystal rating 9 on the Mohs hardness scale. Undergoes triple-layered anti-reflective coating for absolute visual clarity."
    },
    {
      icon: <Waves size={20} className="text-gold" />,
      title: "Water Resistance",
      short: "Engineered to withstand depths from 50m to 200m.",
      detail: "Featuring screw-down casebacks and advanced synthetic rubber gaskets, our diver series undergoes pressure tank testing to ensure water integrity."
    },
    {
      icon: <Compass size={20} className="text-gold" />,
      title: "Quartz & Automatic Movements",
      short: "Mechanical self-winding or high-frequency quartz.",
      detail: "Select from the absolute precision of Swiss quartz oscillations or the organic sweeping second hand of 25-jewel automatic self-winding calibres."
    },
    {
      icon: <CheckCircle size={20} className="text-gold" />,
      title: "Precision Engineering",
      short: "CNC machined components polished by hand.",
      detail: "Bridges and escapements are machined to micron tolerances, then meticulously decorated with Côtes de Genève stripes and perlage finishes."
    },
    {
      icon: <Shield size={20} className="text-gold" />,
      title: "Premium Materials",
      short: "904L steel casing and 18-karat gold plating.",
      detail: "We construct casings using 904L stainless steel for maximum corrosion resistance, paired with 5-micron thick gold plating that will never fade."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Title block */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold"
        >
          TECHNICAL PERFECTION
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.15 }}
          className="font-serif text-3xl md:text-5xl text-white tracking-wider"
        >
          Swiss Craftsmanship
        </motion.h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Animated Feature List (6 Items) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => {
              const isActive = activeFeature === idx
              return (
                <motion.button 
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: appleEase, delay: idx * 0.08 }}
                  onClick={() => setActiveFeature(idx)}
                  className={`text-left p-6 border rounded-sm transition-all duration-500 ease-out flex flex-col justify-between h-44 ${
                    isActive 
                      ? 'bg-luxury-gray border-gold shadow-gold-glow/10 translate-y-[-2px]' 
                      : 'luxury-glass hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`p-2 rounded-sm border transition-colors ${
                      isActive ? 'bg-luxury-black border-gold/40' : 'bg-luxury-black/60 border-luxury-gray'
                    }`}>
                      {feature.icon}
                    </div>
                    {isActive && (
                      <span className="text-[8px] bg-gold/15 text-gold border border-gold/30 px-2 py-0.5 rounded-sm tracking-widest font-semibold uppercase">
                        ACTIVE SPEC
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xs font-serif uppercase tracking-[0.15em] text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 line-clamp-2">
                      {feature.short}
                    </p>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Selected Feature Deep Detail block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-luxury-charcoal/40 border border-luxury-gray rounded-sm relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-gold mb-2">
                  Deep-Dive: {features[activeFeature].title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {features[activeFeature].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Side: High End Imagery & Roman Bezel Pattern */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: appleEase, delay: 0.2 }}
          className="lg:col-span-5 relative lg:sticky lg:top-24"
        >
          <div className="absolute inset-0 bg-greca-pattern pointer-events-none rounded-sm"></div>
          
          <div className="relative border gold-border p-3 bg-luxury-black rounded-sm shadow-xl">
            {/* Visual element frame */}
            <div className="overflow-hidden relative h-[420px] rounded-sm">
              <img 
                src="/assets/luxury_watch_craftsmanship.png" 
                alt="Intricate gear movements of Swiss watches" 
                className="w-full h-full object-cover filter brightness-75 hover:brightness-90 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-luxury-charcoal/90 border border-gold/20 rounded-sm backdrop-blur-md">
                <span className="text-[9px] tracking-widest text-gold font-semibold uppercase">Precision Calibres</span>
                <p className="font-serif text-sm text-white mt-1 leading-snug">
                  "Timekeeping is not just about measuring seconds; it is about housing micro-mechanical symphonies."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SwissCraftsmanship
