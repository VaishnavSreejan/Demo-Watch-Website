import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Eye, Layers, Landmark } from 'lucide-react'

function SignatureElements() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const appleEase = [0.16, 1, 0.3, 1]

  const elements = [
    {
      icon: <Sparkles size={24} className="text-gold" />,
      title: "Medusa Emblem",
      desc: "Our central icon of strength, beauty, and magnetic allure. Cast in 3D relief, it sits proudly on watch crowns and at the 12 o'clock dial position.",
      bgGlow: "from-amber-500/10 to-transparent",
      highlight: "Encounter the magnetic gaze that anchors every timepiece's dial design."
    },
    {
      icon: <Landmark size={24} className="text-gold" />,
      title: "Greca Bezel Pattern",
      desc: "A continuous geometric key pattern inspired by classical Roman architecture. Engraved with laser precision onto bezels and molded into steel links.",
      bgGlow: "from-yellow-600/10 to-transparent",
      highlight: "The eternal symbol of mathematical infinity and bold architectural structure."
    },
    {
      icon: <Layers size={24} className="text-gold" />,
      title: "Roman-Inspired Dial Layouts",
      desc: "Chiseled, high-relief Roman numerals are applied individually by hand. They echo the stone pillars and classical aesthetics of historic Italy.",
      bgGlow: "from-gold/10 to-transparent",
      highlight: "A historical framework built for high-performance contemporary horology."
    },
    {
      icon: <Eye size={24} className="text-gold" />,
      title: "Contrast Luxury Finishes",
      desc: "Meticulous surface polishing that alternates between satin-brushed matte steel and high-gloss 18k gold plating to catch light reflections.",
      bgGlow: "from-yellow-500/10 to-transparent",
      highlight: "Expert chamfering that reveals depth and dimension at every viewing angle."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold"
        >
          THE DESIGN CODE
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.15 }}
          className="font-serif text-3xl md:text-5xl text-white tracking-wider max-w-2xl"
        >
          Signature Design Elements
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs text-gray-500 mt-4 max-w-lg leading-relaxed"
        >
          Behind every Aurelius Ora lies a strict aesthetic vocabulary. Fusing historic Roman proportions with high-glamour Italian detailing.
        </motion.p>
      </div>

      {/* Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {elements.map((elem, idx) => {
          const isHovered = hoveredIdx === idx
          return (
            <motion.div 
              key={elem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: appleEase, delay: idx * 0.15 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="p-8 border border-luxury-gray bg-luxury-charcoal/40 hover:border-gold/30 rounded-sm relative overflow-hidden transition-all duration-500 ease-out group min-h-[260px] flex flex-col justify-between"
            >
              {/* Radial gradient glow behind active cards */}
              <div className={`absolute inset-0 bg-gradient-to-br ${elem.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              
              {/* Top Row Icon and Bezel lines decoration */}
              <div className="flex justify-between items-center relative z-10">
                <div className="p-3 bg-luxury-black border border-luxury-gray rounded-sm group-hover:border-gold/30 transition-all duration-500">
                  {elem.icon}
                </div>
                <span className="text-[10px] tracking-widest text-gold/30 group-hover:text-gold transition-colors font-bold font-serif">
                  0{idx + 1}
                </span>
              </div>

              {/* Central Text Detail */}
              <div className="space-y-3 mt-6 relative z-10">
                <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300">
                  {elem.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {elem.desc}
                </p>
              </div>

              {/* Expansion text showing details on hover */}
              <motion.div 
                className="mt-6 pt-4 border-t border-luxury-gray/40 relative z-10"
                initial={false}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? "auto" : 0,
                  marginTop: isHovered ? 24 : 0,
                  paddingTop: isHovered ? 16 : 0
                }}
                transition={{ duration: 0.4, ease: appleEase }}
              >
                <p className="text-[10px] text-gold tracking-wider italic">
                  {elem.highlight}
                </p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SignatureElements
