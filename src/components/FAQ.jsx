import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "Where are Aurelius Ora watches manufactured?",
      answer: "Every single Aurelius Ora timepiece is manufactured, hand-assembled, and calibrated in Bienne, Switzerland. We follow the strict guidelines set by the Federation of the Swiss Watch Industry (FH) to certify the official 'Swiss Made' status."
    },
    {
      question: "What kind of warranty is included with my purchase?",
      answer: "All purchases include a complimentary 5-Year Global Warranty. This covers manufacturing defects, movement calibration variances, and gaskets. Servicing can be requested through our website or at any authorized flagship salon globally."
    },
    {
      question: "Are custom engravings or bespoke adjustments available?",
      answer: "Yes, our bespoke concierge division allows clients to request personalized engraving on the back casing, precious metal adjustments, and dial color variations. Please contact our sales concierge directly to coordinate custom configurations."
    },
    {
      question: "How do I care for my automatic timepiece?",
      answer: "We recommend winding your automatic watch manually if left unworn for over 40 hours. Keep it away from strong magnetic fields (such as speakers or microwave ovens). To preserve the synthetic seals, we advise a comprehensive service check-up every 4 to 5 years."
    },
    {
      question: "What is your return and return-insurance policy?",
      answer: "We offer an insured 14-day complimentary return policy on all unworn items returned in their original condition, including the heavy timber display cases, certificates of authenticity, and tag markings. Concierge will organize secure pickup."
    }
  ]

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold">
          ACQUIRE DETAILS
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider">
          Frequently Asked Questions
        </h2>
        <div className="w-12 h-0.5 bg-gold mt-4"></div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div 
              key={idx}
              className="border border-luxury-gray bg-luxury-charcoal/20 rounded-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-luxury-gray/40 transition-colors focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-serif text-sm text-white pr-4 tracking-wide">
                  {faq.question}
                </span>
                <span className="text-gold flex-shrink-0">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              {/* Accordion Answer Body */}
              <div 
                id={`faq-answer-${idx}`}
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-60 opacity-100 border-t border-luxury-gray/30' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="p-6 text-xs leading-relaxed text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
