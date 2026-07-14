import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)

  // Use framer-motion to create a parallax effect as the user scrolls down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Transform values for parallax and fading
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  // Framer Motion variants for text reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* ── Parallax Background Image ── */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: yParallax, 
          scale: scaleImage,
          opacity: opacityFade
        }}
      >
        {/* We use a static frame from the original sequence to ensure continuity, styled flawlessly */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ 
            backgroundImage: "url('/assets/images/herosection/ezgif-frame-140.png')",
            backgroundPosition: "center 40%"
          }}
        />
        
        {/* Gradients for text legibility and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        <div className="absolute inset-0 bg-radial-gold-glow opacity-40 mix-blend-screen" />
      </motion.div>

      {/* ── Main Content Block ── */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 mt-16 max-w-4xl"
        style={{ opacity: opacityFade }}
      >
        <motion.span 
          variants={fadeUp}
          className="text-[10px] sm:text-[12px] tracking-[0.6em] text-gold uppercase font-light mb-6 block"
        >
          Haute Horlogerie d'Avant-Garde
        </motion.span>
        
        <motion.h1 
          variants={fadeUp}
          className="font-serif text-[50px] sm:text-[70px] md:text-[90px] text-white leading-[1.05] tracking-tight mb-6"
        >
          AURELIUS GILT
        </motion.h1>

        <motion.div 
          variants={fadeUp}
          className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
        />

        <motion.p 
          variants={fadeUp}
          className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl"
        >
          An intricate mechanical symphony of gold and steel. Forged with uncompromising precision, defining the pinnacle of Swiss craftsmanship.
        </motion.p>
        
        <motion.div variants={fadeUp} className="mt-12 flex gap-6 items-center">
          <a 
            href="#masterpiece-details"
            className="px-8 py-3.5 border border-gold text-gold text-[10px] tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Discover the Masterpiece
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.4em] text-white/40 uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
