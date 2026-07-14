import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center relative overflow-hidden">
      {/* Background glow circle inside the CTA box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-radial-gold-glow pointer-events-none z-0"></div>

      <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.45em] text-gold uppercase block font-semibold">
          ACQUISITION & BOUTIQUE SESSIONS
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider leading-tight">
          Discover Your Signature <br /> <span className="italic text-gold-gradient font-normal">Timepiece</span>
        </h2>
        
        <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
          Whether buying online with complimentary armored delivery, or booking a private consulting session at one of our global flagship salons.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <a 
            href="#collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-luxury-black text-xs font-semibold py-3.5 px-8 uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:scale-102"
          >
            <span>SHOP COLLECTIONS</span>
            <ArrowRight size={14} />
          </a>
          
          <a 
            href="#locator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 hover:border-gold text-white hover:bg-gold/5 text-xs font-semibold py-3.5 px-8 uppercase tracking-[0.2em] rounded-sm transition-all duration-300"
          >
            <MapPin size={14} className="text-gold" />
            <span>STORE LOCATOR</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CTA
