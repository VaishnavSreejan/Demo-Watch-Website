import React, { useState } from 'react'
import { X, Heart, Shield, Award, Clock } from 'lucide-react'

function QuickViewModal({ product, onClose, isInWishlist, toggleWishlist }) {
  const [selectedColor, setSelectedColor] = useState(product.color)

  // Avoid modal background click triggers close
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-luxury-charcoal border gold-border rounded-lg shadow-gold-glow-lg overflow-hidden flex flex-col md:flex-row relative animate-slide-up"
        onClick={handleModalClick}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close detail modal"
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gold transition-colors duration-300 p-1 bg-luxury-black/40 rounded-full border border-gray-800"
        >
          <X size={20} />
        </button>

        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-[#050505] flex items-center justify-center p-8 relative min-h-[300px]">
          {/* subtle gold ambient glow behind watch */}
          <div className="absolute w-[200px] h-[200px] bg-gold/10 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-[350px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l gold-border">
          <div>
            {/* Category / Collection */}
            <span className="text-[10px] tracking-[0.25em] text-gold font-semibold uppercase">
              {product.collection}
            </span>

            {/* Title */}
            <h2 className="font-serif text-2xl md:text-3xl text-white mt-1 mb-2">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-xl font-serif text-gold font-semibold mb-4">
              {product.price}
            </p>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              {product.description || `Crafted for those with a taste for bold aesthetics, the ${product.name} stands as an icon of luxury. Every element is designed with meticulous attention to detail, matching Swiss watchmaking standards.`}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-2 border border-luxury-gray bg-luxury-black/40 rounded-sm">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Movement</span>
                <span className="text-xs text-white font-medium">{product.specs?.movement || 'Swiss Quartz'}</span>
              </div>
              <div className="p-2 border border-luxury-gray bg-luxury-black/40 rounded-sm">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Case</span>
                <span className="text-xs text-white font-medium">{product.specs?.case || '316L Stainless Steel'}</span>
              </div>
              <div className="p-2 border border-luxury-gray bg-luxury-black/40 rounded-sm">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Glass</span>
                <span className="text-xs text-white font-medium">{product.specs?.glass || 'Anti-reflective Sapphire'}</span>
              </div>
              <div className="p-2 border border-luxury-gray bg-luxury-black/40 rounded-sm">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Water Resistance</span>
                <span className="text-xs text-white font-medium">{product.specs?.waterResistance || '50 Meters'}</span>
              </div>
            </div>

            {/* Color/Variant Selection */}
            {product.variants && (
              <div className="mb-6">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2">Color Variant</span>
                <div className="flex space-x-2">
                  {product.variants.map((v) => (
                    <button 
                      key={v}
                      onClick={() => setSelectedColor(v)}
                      className={`text-[10px] px-3 py-1.5 border rounded-sm transition-all duration-300 tracking-wider ${
                        selectedColor === v 
                          ? 'border-gold text-gold bg-gold/5' 
                          : 'border-luxury-gray text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Buttons & Trust Indicators */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <button 
                className="flex-grow bg-gold hover:bg-gold-dark text-luxury-black text-xs font-semibold py-3 uppercase tracking-[0.2em] rounded-sm transition-colors duration-300"
              >
                REQUEST PERSONALIZED INQUIRY
              </button>
              
              <button 
                onClick={() => toggleWishlist(product.id)}
                aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                className={`px-4 py-3 border rounded-sm transition-all duration-300 flex items-center justify-center ${
                  isInWishlist 
                    ? 'border-gold text-gold bg-gold/10' 
                    : 'border-luxury-gray text-gray-400 hover:border-gold hover:text-gold'
                }`}
              >
                <Heart size={16} fill={isInWishlist ? '#d4af37' : 'none'} />
              </button>
            </div>

            {/* Quick Badges */}
            <div className="flex justify-between border-t border-luxury-gray pt-4 text-[9px] text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Shield size={10} className="text-gold" /> Swiss Made</span>
              <span className="flex items-center gap-1"><Award size={10} className="text-gold" /> 5-Yr Warranty</span>
              <span className="flex items-center gap-1"><Clock size={10} className="text-gold" /> Free Insured Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal
