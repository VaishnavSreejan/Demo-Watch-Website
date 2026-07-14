import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, HardDrive, Compass } from 'lucide-react'

function ProductDetailShowcase() {
  const appleEase = [0.16, 1, 0.3, 1]

  const details = [
    {
      icon: <Cpu className="text-gold" size={20} />,
      title: "Skeleton Calibre Movement",
      text: "The beating heart is a fully custom Swiss self-winding skeleton movement. Every balance bridge and cog is chiseled out to reveal the micro-mechanical orchestra within, visible from both front and back sapphire windows."
    },
    {
      icon: <ShieldCheck className="text-gold" size={20} />,
      title: "Solid 18K Yellow Gold Bezel",
      text: "Engraved with the signature Roman key (Greca) pattern. Cut from a single solid block of 18k yellow gold, hand-polished to a reflective mirror shine that contrasts beautifully with the brushed dark DLC case."
    },
    {
      icon: <Compass className="text-gold" size={20} />,
      title: "Micron-Level Tolerance Assembly",
      text: "Assembled under 10x magnification by master watchmakers in Geneva. Each indicator pin and ruby gear housing is set by hand, securing standard precision of -2/+4 seconds daily."
    }
  ]

  const specsList = [
    { name: "Reference", val: "AO-7700-GILT" },
    { name: "Movement", val: "Aurelius Chrono-Automatic" },
    { name: "Power Reserve", val: "48 Hours Self-Winding" },
    { name: "Jewels", val: "25 Synthetic Rubies" },
    { name: "Water Depth", val: "100 Meters / 10 ATM" },
    { name: "Case Profile", val: "42mm Steel/DLC/18K Gold" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 relative overflow-hidden">
      
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-radial-gold-glow pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Side Column: Large Price Showcase & Core Metrics */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="space-y-3"
          >
            <span className="text-[10px] tracking-[0.4em] text-gold uppercase block font-semibold">
              SIGNATURE TIMEPIECE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider leading-tight">
              Aurelius Gilt <br /> <span className="text-gold-gradient font-light italic">Masterpiece</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-4"></div>
          </motion.div>

          {/* Pricing Highlight block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.15 }}
            className="p-8 border border-gold/25 bg-gold/5 rounded-sm relative overflow-hidden group shadow-gold-glow/5"
          >
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block">EXCLUSIVELY PRICED AT</span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="font-serif text-4xl md:text-5xl text-gold font-bold">$3,600</span>
              <span className="text-xs text-gray-400 font-medium tracking-wider">USD</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
              Price includes secure, fully insured global armored express courier delivery, bespoke caseback personal engraving service, and custom link adjustment sessions at flagships.
            </p>
          </motion.div>

          {/* Specifications table list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.3 }}
            className="border border-luxury-gray bg-luxury-black/60 rounded-sm p-6 space-y-4"
          >
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block border-b border-luxury-gray/50 pb-2">Technical Registry</span>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {specsList.map((spec) => (
                <div key={spec.name} className="border-b border-luxury-gray/30 pb-2">
                  <span className="text-[9px] text-gray-500 block uppercase tracking-wider">{spec.name}</span>
                  <span className="text-xs text-white font-medium">{spec.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Side Column: Technical Detail cards with Framer Motion slide-in */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-6">
            {details.map((detail, idx) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: appleEase, delay: idx * 0.15 }}
                className="p-8 border border-luxury-gray bg-luxury-charcoal/20 hover:border-gold/30 rounded-sm hover:translate-y-[-2px] transition-all duration-500 group flex items-start space-x-6"
              >
                <div className="p-3.5 bg-luxury-black border border-luxury-gray rounded-sm group-hover:border-gold/30 transition-colors duration-500 flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors duration-300">
                    {detail.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {detail.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Inquire Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.5 }}
            className="p-8 border border-luxury-gray bg-luxury-black/40 rounded-sm flex flex-col sm:flex-row justify-between items-center gap-6"
          >
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-sm text-white">Arrange a Private Viewing</h4>
              <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Meet an expert advisor for a personal video fitting</p>
            </div>
            
            <button
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-luxury-black text-[10px] font-bold py-3.5 px-6 uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:scale-102 flex-shrink-0"
            >
              REQUEST PRIVATE APPOINTMENT
            </button>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetailShowcase
