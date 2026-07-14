import React, { useState } from 'react'
import { Send, MapPin, ShieldCheck, HelpCircle, PhoneCall, Mail } from 'lucide-react'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="bg-[#030303] border-t gold-border pt-20 pb-10 text-gray-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Info & Newsletter */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.25em] text-white">
              AURELIUS ORA
            </span>
            <span className="text-[8px] tracking-[0.4em] text-gold font-light mt-0.5">
              HAUTE HORLOGERIE
            </span>
          </div>
          <p className="text-xs leading-relaxed text-gray-500">
            Fusing Italian fashion heritage with Swiss-made perfection. Creating timepieces for those who view watchmaking as the highest expression of art and luxury.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input 
              type="email" 
              required
              placeholder="YOUR EMAIL ADDRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-luxury-gray text-white text-xs border gold-border px-4 py-3 pr-12 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 tracking-widest"
            />
            <button 
              type="submit" 
              aria-label="Subscribe"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors duration-300"
            >
              <Send size={16} />
            </button>
            {subscribed && (
              <span className="text-[10px] text-gold mt-1 block animate-fade-in absolute">
                Welcome to Aurelius Circle.
              </span>
            )}
          </form>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-white mb-6">
            Collections
          </h4>
          <ul className="space-y-3 text-xs">
            <li><a href="#collections" className="hover:text-gold transition-colors duration-300">Greca Fortuna</a></li>
            <li><a href="#collections" className="hover:text-gold transition-colors duration-300">V Dome Series</a></li>
            <li><a href="#collections" className="hover:text-gold transition-colors duration-300">Antares Collection</a></li>
            <li><a href="#collections" className="hover:text-gold transition-colors duration-300">Greca Logo Diver</a></li>
            <li><a href="#collections" className="hover:text-gold transition-colors duration-300">Chrono Master</a></li>
            <li><a href="#collections" className="hover:text-gold transition-colors duration-300">Women's Reve & Hera</a></li>
          </ul>
        </div>

        {/* Client Services */}
        <div>
          <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-white mb-6">
            Client Services
          </h4>
          <ul className="space-y-3 text-xs">
            <li><a href="#faq" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><HelpCircle size={14} className="text-gold" /> FAQ & Help</a></li>
            <li><a href="#warranty" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ShieldCheck size={14} className="text-gold" /> 5-Year Global Warranty</a></li>
            <li><a href="#locator" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><MapPin size={14} className="text-gold" /> Store Locator</a></li>
            <li className="pt-2 border-t border-luxury-gray text-gray-500">
              <span className="flex items-center gap-2"><PhoneCall size={12} /> +1 (555) 000-0000 (Demo)</span>
            </li>
            <li className="text-gray-500">
              <span className="flex items-center gap-2"><Mail size={12} /> demo@example.com</span>
            </li>
          </ul>
        </div>

        {/* Heritage & Values */}
        <div>
          <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-white mb-6">
            Our Boutiques
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Visit our architectural flagship salons located in Milan, Geneva, New York, Tokyo, and Dubai for a bespoke personal consulting session.
          </p>
          <a 
            href="#locator"
            className="inline-flex items-center gap-2 text-xs text-gold border border-gold/40 hover:bg-gold hover:text-luxury-black transition-all duration-300 px-4 py-2 rounded-sm"
          >
            <MapPin size={14} />
            <span>FIND A BOUTIQUE</span>
          </a>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-luxury-gray flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-gray-600">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} AURELIUS ORA SA. ALL RIGHTS RESERVED.
        </div>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:text-gold transition-colors">PRIVACY POLICY</a>
          <a href="#terms" className="hover:text-gold transition-colors">TERMS OF USE</a>
          <a href="#cookies" className="hover:text-gold transition-colors">COOKIE SETTINGS</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
