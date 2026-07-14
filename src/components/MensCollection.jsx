import React, { useRef } from 'react'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

function MensCollection({ wishlist, toggleWishlist, openQuickView }) {
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
      id: "m1",
      name: "Chrono Master Gold",
      collection: "Chrono Master",
      color: "18K Gold / Onyx Black",
      price: "$3,400",
      image: "/assets/mens_gold_watch.png",
      variants: ["Gold / Black", "Rose Gold", "Full Gold"],
      description: "A high-performance luxury chronograph, sporting double-rimmed subdials, polished case lugs, and deep gold indexes.",
      specs: {
        movement: "Swiss Automatic Chronograph",
        case: "42mm 18K Yellow Gold",
        glass: "Anti-reflective Sapphire",
        waterResistance: "100 Meters"
      }
    },
    {
      id: "m2",
      name: "V Dome Classic",
      collection: "V Dome Series",
      color: "Yellow Gold & Steel",
      price: "$2,400",
      image: "/assets/mens_gold_watch.png",
      variants: ["Steel / Gold", "Full Black", "Rose Gold"],
      description: "Bold structural case lines meet a geometric dark sunray dial and a highly polished architectural link bracelet.",
      specs: {
        movement: "Swiss Quartz Precision",
        case: "43mm 316L Steel & Gold",
        glass: "Double Curved Sapphire",
        waterResistance: "50 Meters"
      }
    },
    {
      id: "m3",
      name: "Greca Diver Pro",
      collection: "Greca Logo Diver",
      color: "Brushed Steel / Carbon Black",
      price: "$2,950",
      image: "/assets/mens_gold_watch.png",
      variants: ["Steel / Black", "Titanium Grey", "Steel / Gold"],
      description: "Professional grade marine watch with a rotating ceramic bezel, luminescent hour indicators, and a robust lock-down crown.",
      specs: {
        movement: "Swiss Automatic Calibre 5",
        case: "44mm 904L Stainless Steel",
        glass: "Thick Scratch-Resistant Sapphire",
        waterResistance: "200 Meters"
      }
    },
    {
      id: "m4",
      name: "Antares Skeleton",
      collection: "Antares Collection",
      color: "Charcoal Titanium / Yellow Gold",
      price: "$3,100",
      image: "/assets/mens_gold_watch.png",
      variants: ["Titanium / Gold", "All Black DLC"],
      description: "A visual showcase of horology. Open skeleton dial detailing custom gold-plated bridge gears and a carbon leather strap.",
      specs: {
        movement: "Swiss Hand-Wound Skeleton",
        case: "41mm Matte DLC Titanium",
        glass: "Faceted Sapphire Crystal",
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
            GENTLEMAN'S EDITION
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider">
            Men's Collection
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

export default MensCollection
