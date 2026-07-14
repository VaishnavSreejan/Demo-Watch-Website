import React from 'react'
import { ArrowRight, Compass } from 'lucide-react'
import { motion } from 'framer-motion'

function FeaturedCollections() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

    const collections = [
      {
        name: "Greca Fortuna",
        desc: "An icon of visual rhythm, boasting a signature key-pattern bezel and date magnifier.",
        price: "$1,850",
        image: "/assets/mens_gold_watch.png",
        tag: "Classic Elegance"
      },
      {
        name: "V Dome",
        desc: "Bold dimensional casing with heavy structural gold bars and a prominent crown Medusa.",
        price: "$2,400",
        image: "/assets/mens_gold_watch.png",
        tag: "Architectural"
      },
      {
        name: "Antares",
        desc: "Aggressive geometric angles surrounding a skeletonized multi-layered mechanical dial.",
        price: "$2,100",
        image: "/assets/mens_gold_watch.png",
        tag: "Avant-Garde"
      },
      {
        name: "Greca Logo Diver",
        desc: "Certified to 200m depth, pairing heavy links with a highly functional rotating bezel.",
        price: "$2,950",
        image: "/assets/mens_gold_watch.png",
        tag: "Professional"
      },
      {
        name: "Chrono Master",
        desc: "High-precision split-second chronograph detailed with gold-ringed registers.",
        price: "$3,200",
        image: "/assets/mens_gold_watch.png",
        tag: "Performance"
      },
      {
        name: "Versace Reve",
        desc: "Refined women's styling matching mother-of-pearl dial layout with fine indices.",
        price: "$2,150",
        image: "/assets/womens_rose_gold_watch.png",
        tag: "High Glamour"
      },
      {
        name: "Versace Hera",
        desc: "Draped in polished rose gold link bracelets and a crystal-halo bezel.",
        price: "$2,600",
        image: "/assets/womens_rose_gold_watch.png",
        tag: "Precious Stone"
      },
      {
        name: "V-Code Lady",
        desc: "An ultra-thin, low-profile dress watch configured with minimal Roman markers.",
        price: "$1,950",
        image: "/assets/womens_rose_gold_watch.png",
        tag: "Minimalist Luxury"
      }
    ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold">
            CURATED TIERS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider">
            Featured Collections
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-xs text-gray-500 max-w-md">
          Explore eight distinct horological chapters, each encapsulating a separate facet of bold Italian luxury and Swiss engineering.
        </div>
      </div>

      {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
        {collections.map((col, idx) => (
          <motion.div
            key={col.name}
            className="group luxury-glass rounded-sm overflow-hidden flex flex-col justify-between hover:border-gold/40 transition-all duration-500 hover:shadow-gold-glow/5"
            variants={item}
          >
            {/* Image Panel */}
            <div className="h-64 bg-[#08080a] relative overflow-hidden flex items-center justify-center p-6 border-b border-luxury-gray">
              {/* background light glow */}
              <div className="absolute w-36 h-36 bg-gold/5 rounded-full filter blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>
              
              <img 
                src={col.image} 
                alt={`${col.name} Watch Preview`} 
                className="max-h-48 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Tag */}
              <span className="absolute top-4 left-4 text-[9px] tracking-widest text-gold border border-gold/30 px-2.5 py-1 bg-luxury-black/60 rounded-sm">
                {col.tag}
              </span>
            </div>

            {/* Description Details */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors duration-300">
                  {col.name}
                </h3>
                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed h-12 overflow-hidden">
                  {col.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs">
                  <span className="text-[9px] text-gray-500 block uppercase tracking-wider">Starting At</span>
                  <span className="font-serif text-white font-semibold">{col.price}</span>
                </div>
                
                <a 
                  href="#mens-collection"
                  className="p-2 border border-luxury-gray hover:border-gold text-gray-400 hover:text-gold rounded-full transition-all duration-300 flex items-center justify-center group-hover:translate-x-1"
                  aria-label={`Explore ${col.name} Collection`}
                >
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>
    </div>
  )
}

export default FeaturedCollections
