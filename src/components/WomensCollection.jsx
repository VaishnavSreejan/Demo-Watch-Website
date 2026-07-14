import React, { useRef } from 'react'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

function WomensCollection({ wishlist, toggleWishlist, openQuickView }) {
  const scrollContainerRef = useRef(null)

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const products = [
    {
      id: "w1",
      name: "Versace Reve Diamond",
      collection: "Versace Reve",
      color: "Rose Gold / Mother of Pearl",
      price: "$2,150",
      image: "/assets/womens_rose_gold_watch.png",
      variants: ["Rose Gold", "Silver / Rose Gold", "Full Gold"],
      description: "An outstanding expression of fine jewelry watchmaking. Detailed with 12 brilliant-cut diamond indexes, a mother-of-pearl center dial, and an integrated link band.",
      specs: {
        movement: "Swiss Quartz Calibre",
        case: "36mm Rose Gold Plated",
        glass: "Anti-reflective Sapphire",
        waterResistance: "30 Meters"
      }
    },
    {
      id: "w2",
      name: "Versace Hera Halo",
      collection: "Versace Hera",
      color: "18K Rose Gold & Ivory",
      price: "$2,600",
      image: "/assets/womens_rose_gold_watch.png",
      variants: ["18K Rose Gold", "All Diamond Bezel", "Silver Steel"],
      description: "A glamorous halo design bordered by two rows of hand-set pavé crystals, framing an elegant Ivory guilloché dial.",
      specs: {
        movement: "Swiss Precision Quartz",
        case: "37mm Solid Rose Gold Casing",
        glass: "Faceted Sapphire Crystal",
        waterResistance: "30 Meters"
      }
    },
    {
      id: "w3",
      name: "V-Code Lady Diamond",
      collection: "V-Code Lady",
      color: "Rose Gold / Pink Pearl",
      price: "$1,950",
      image: "/assets/womens_rose_gold_watch.png",
      variants: ["Pink Pearl", "White Pearl", "Charcoal Gold"],
      description: "Ultra-thin, low-profile case matches minimalist luxury style with index hour markers set with brilliant diamonds.",
      specs: {
        movement: "Swiss Quartz Slimline",
        case: "34mm Ultra-Thin Rose Gold",
        glass: "Double-Dome Sapphire",
        waterResistance: "30 Meters"
      }
    },
    {
      id: "w4",
      name: "Greca Fortuna Lady",
      collection: "Greca Fortuna",
      color: "Satin Gold / White Satin Strap",
      price: "$2,800",
      image: "/assets/womens_rose_gold_watch.png",
      variants: ["White Satin", "Rose Gold Link", "Emerald Leather"],
      description: "Exquisite visual balance featuring a micro-Greca patterned bezel outer ring, numerical hours, and a high-end satin strap.",
      specs: {
        movement: "Swiss Quartz Calibre 2.0",
        case: "35mm Gold Satin Finish",
        glass: "Scratch-Resistant Sapphire",
        waterResistance: "50 Meters"
      }
    }
  ]

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold">
            FEMININE MAJESTY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider">
            Women's Collection
          </h2>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="p-3 border border-luxury-gray hover:border-gold text-gray-400 hover:text-gold rounded-full transition-all duration-300"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="p-3 border border-luxury-gray hover:border-gold text-gray-400 hover:text-gold rounded-full transition-all duration-300"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div 
        ref={scrollContainerRef}
        className="flex space-x-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => {
          const isFavorited = wishlist.includes(product.id)
          return (
            <motion.div 
              key={product.id}
              className="min-w-[280px] sm:min-w-[340px] snap-start group luxury-glass luxury-glass-hover rounded-sm overflow-hidden flex flex-col justify-between"
              variants={item}
            >
              {/* Image Container */}
              <div className="h-80 bg-luxury-black relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute w-44 h-44 bg-gold/5 rounded-full filter blur-2xl group-hover:bg-gold/10 transition-all duration-500"></div>
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-60 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Buttons Panel */}
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button 
                    onClick={() => openQuickView(product)}
                    className="p-3 bg-white text-luxury-black rounded-full hover:bg-gold hover:text-luxury-black transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label={`Quick View ${product.name}`}
                  >
                    <Eye size={18} />
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md ${
                      isFavorited 
                        ? 'bg-gold text-luxury-black' 
                        : 'bg-luxury-gray text-white hover:bg-gold hover:text-luxury-black'
                    }`}
                    aria-label={isFavorited ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                  >
                    <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 border-t border-luxury-gray/50 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-gold uppercase block">
                    {product.collection}
                  </span>
                  <h3 className="font-serif text-base text-white mt-1 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {product.color}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-serif text-lg text-white font-semibold">
                    {product.price}
                  </span>
                  
                  <button 
                    onClick={() => openQuickView(product)}
                    className="text-[10px] tracking-widest text-gold hover:text-white uppercase transition-colors duration-300 font-medium"
                  >
                    QUICK VIEW
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default WomensCollection
