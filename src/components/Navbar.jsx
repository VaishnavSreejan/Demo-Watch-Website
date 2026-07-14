import React, { useState, useEffect } from 'react'
import { Heart, Search, Menu, X, Globe } from 'lucide-react'

function Navbar({ wishlistCount }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track page scroll to apply more solid background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Masterpiece', href: '#masterpiece-details' },
    { name: 'Heritage', href: '#brand-story' },
    { name: 'Collections', href: '#collections' },
    { name: 'Men', href: '#mens-collection' },
    { name: 'Women', href: '#womens-collection' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Signature', href: '#design-elements' },
    { name: 'Compare', href: '#comparison' }
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-luxury-black/96 shadow-md border-b gold-border shadow-gold-glow/5 backdrop-blur-md' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="w-full px-10 xl:px-16 flex items-center justify-between h-[72px]">

        {/* Brand Logo — left-aligned, vertically centred */}
        <a href="#" className="flex flex-col justify-center group flex-shrink-0">
          <span className="font-serif text-xl xl:text-2xl tracking-[0.22em] text-white group-hover:text-gold transition-colors duration-300 leading-none whitespace-nowrap">
            AURELIUS ORA
          </span>
          <span className="text-[8px] tracking-[0.42em] text-gold font-light mt-[5px] whitespace-nowrap uppercase">
            Haute Horlogerie
          </span>
        </a>

        {/* Desktop Nav — centred between logo and utilities */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-9">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] xl:text-[11px] uppercase tracking-[0.18em] xl:tracking-[0.22em] text-gray-400 hover:text-gold transition-colors duration-300 relative py-1
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right utility icons */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 flex-shrink-0">
          {/* Gold divider */}
          <div className="h-5 w-[1px] bg-gold/20"></div>

          <button 
            aria-label="Search Collection"
            className="text-gray-400 hover:text-gold transition-colors duration-300"
          >
            <Search size={16} />
          </button>
          
          <a 
            href="#wishlist" 
            aria-label={`Wishlist: ${wishlistCount} items`}
            className="text-gray-400 hover:text-gold transition-colors duration-300 relative flex items-center"
          >
            <Heart size={16} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-gold text-luxury-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </a>

          <div className="flex items-center gap-1 text-gold border border-gold/30 px-2.5 py-1 rounded-sm bg-gold/5 cursor-pointer hover:bg-gold/10 transition-colors duration-200">
            <Globe size={11} />
            <span className="tracking-widest uppercase text-[9px] font-medium">EN</span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-5">
          <a 
            href="#wishlist" 
            aria-label={`Wishlist: ${wishlistCount} items`}
            className="text-gray-300 hover:text-gold transition-colors duration-300 relative flex items-center"
          >
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-gold text-luxury-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-gray-300 hover:text-gold transition-colors duration-300 focus:outline-none"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 top-[68px] z-40 bg-luxury-black/98 transition-all duration-500 ease-in-out lg:hidden border-t gold-border ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-8 px-6 text-center">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-lg tracking-[0.2em] text-gray-300 hover:text-gold transition-colors duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t gold-border w-24 flex justify-center space-x-6">
            <button aria-label="Search" className="text-gray-300 hover:text-gold"><Search size={20} /></button>
            <div className="flex items-center space-x-1 text-gold">
              <Globe size={14} />
              <span className="text-xs tracking-widest font-semibold">EN</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
