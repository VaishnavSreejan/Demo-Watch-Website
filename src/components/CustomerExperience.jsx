import React, { useState } from 'react'
import { Star, ShieldCheck, Truck, Headphones, ChevronLeft, ChevronRight } from 'lucide-react'

function CustomerExperience() {
  const [activeIdx, setActiveIdx] = useState(0)

  const testimonials = [
    {
      quote: "The Greca Fortuna represents the absolute peak of my collection. The detailed laser key bezel reflects the light wonderfully, and its Sellita movement is incredibly robust. A masterpieces of modern luxury.",
      author: "Demo 1",
      location: "Location 1",
      rating: 5,
      model: "Greca Fortuna Automatic"
    },
    {
      quote: "Aurelius Ora delivered not just a luxury watch, but a bespoke retail experience. The packaging, heavy timber display box, and concierge follow-up matching the Italian aesthetics were flawless.",
      author: "Demo 2",
      location: "Location 2",
      rating: 5,
      model: "Versace Hera Diamond"
    },
    {
      quote: "The visual geometry of the V Dome watch series makes it stand out in any boardroom. Bold gold casing that stays highly elegant. Swiss mechanics certified to the highest standards.",
      author: "Demo 3",
      location: "Location 3",
      rating: 5,
      model: "V Dome Gold Series"
    }
  ]

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold">
          CLIENT DIARIES
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider">
          Customer Experience
        </h2>
        <div className="w-12 h-0.5 bg-gold mt-4"></div>
      </div>

      {/* Review Box Wrapper */}
      <div className="max-w-4xl mx-auto border gold-border bg-[#0a0a0c]/60 p-8 md:p-12 rounded-sm relative overflow-hidden mb-16">
        {/* large background quote mark decoration */}
        <span className="absolute -top-6 -left-6 font-serif text-[180px] text-gold/5 leading-none pointer-events-none select-none">
          “
        </span>

        {/* Carousel Content */}
        <div className="relative z-10 text-center space-y-6 animate-fade-in">
          {/* Star Ratings */}
          <div className="flex justify-center space-x-1">
            {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
              <Star key={i} size={14} className="text-gold" fill="#d4af37" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <p className="font-serif text-base md:text-xl text-gray-300 italic leading-relaxed">
            "{testimonials[activeIdx].quote}"
          </p>

          {/* Review Author Metadata */}
          <div>
            <span className="text-xs uppercase tracking-widest text-white block font-semibold">
              {testimonials[activeIdx].author}
            </span>
            <span className="text-[10px] tracking-wider text-gray-500 block">
              {testimonials[activeIdx].location} — Verified Client
            </span>
            <span className="inline-block mt-2 text-[9px] text-gold tracking-widest border border-gold/20 px-2 py-0.5 rounded-sm uppercase">
              {testimonials[activeIdx].model}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden sm:block">
          <button 
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="p-2.5 border border-luxury-gray hover:border-gold text-gray-400 hover:text-gold rounded-full transition-colors bg-[#08080a]"
          >
            <ChevronLeft size={14} />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden sm:block">
          <button 
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="p-2.5 border border-luxury-gray hover:border-gold text-gray-400 hover:text-gold rounded-full transition-colors bg-[#08080a]"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8 sm:hidden">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === idx ? 'bg-gold w-4' : 'bg-gray-600'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Indicators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-luxury-gray/40">
        <div className="flex items-center space-x-4 p-4 border border-luxury-gray/35 rounded-sm bg-luxury-charcoal/20">
          <div className="p-3 bg-luxury-black border border-luxury-gray rounded-sm text-gold">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.15em] text-white">Authorized Dealer</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Guaranteed 100% authentic Swiss-manufactured timepieces with individual registration keys.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 border border-luxury-gray/35 rounded-sm bg-luxury-charcoal/20">
          <div className="p-3 bg-luxury-black border border-luxury-gray rounded-sm text-gold">
            <Truck size={22} />
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.15em] text-white">Secured Insured Shipping</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Complimentary global delivery via secure express services with armored logistics signature.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 border border-luxury-gray/35 rounded-sm bg-luxury-charcoal/20">
          <div className="p-3 bg-luxury-black border border-luxury-gray rounded-sm text-gold">
            <Headphones size={22} />
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.15em] text-white">24/7 Dedicated Concierge</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Direct communication channel with expert advisors for personal fittings and custom request services.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerExperience
