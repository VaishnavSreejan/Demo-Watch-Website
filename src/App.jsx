import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductDetailShowcase from './components/ProductDetailShowcase'
import BrandIntroduction from './components/BrandIntroduction'
import FeaturedCollections from './components/FeaturedCollections'
import MensCollection from './components/MensCollection'
import WomensCollection from './components/WomensCollection'
import SwissCraftsmanship from './components/SwissCraftsmanship'
import SignatureElements from './components/SignatureElements'
import ProductComparison from './components/ProductComparison'
import CustomerExperience from './components/CustomerExperience'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import QuickViewModal from './components/QuickViewModal'

function App() {
  // Global states for wishlist and product quick view
  const [wishlist, setWishlist] = useState([])
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const openQuickView = (product) => {
    setQuickViewProduct(product)
  }

  const closeQuickView = () => {
    setQuickViewProduct(null)
  }

  return (
    <div className="min-h-screen bg-luxury-black text-gray-100 flex flex-col relative overflow-x-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-radial-gold-glow pointer-events-none z-0"></div>
      <div className="absolute top-[2000px] right-1/4 w-[600px] h-[600px] bg-radial-gold-glow pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-[800px] h-[800px] bg-radial-gold-glow pointer-events-none z-0"></div>

      {/* Navigation Bar */}
      <Navbar wishlistCount={wishlist.length} />

      {/* Page Content */}
      <main className="flex-grow z-10">
        
        {/* New 1. Immersive Hero Section */}
        <Hero />

        {/* New 2. Masterpiece Detail & Price Section */}
        <section id="masterpiece-details" className="bg-gradient-to-b from-luxury-black to-luxury-charcoal">
          <ProductDetailShowcase />
        </section>

        {/* 3. Brand Introduction Section */}
        <section id="brand-story" className="py-20">
          <BrandIntroduction />
        </section>

        {/* 4. Featured Collections Section */}
        <section id="collections" className="py-20 bg-gradient-to-b from-[#050505] to-luxury-charcoal">
          <FeaturedCollections />
        </section>

        {/* 5. Men's Showcase Section */}
        <section id="mens-collection" className="py-20">
          <MensCollection 
            wishlist={wishlist} 
            toggleWishlist={toggleWishlist} 
            openQuickView={openQuickView} 
          />
        </section>

        {/* 6. Women's Showcase Section */}
        <section id="womens-collection" className="py-20 bg-gradient-to-b from-luxury-charcoal to-[#050505]">
          <WomensCollection 
            wishlist={wishlist} 
            toggleWishlist={toggleWishlist} 
            openQuickView={openQuickView} 
          />
        </section>

        {/* 7. Swiss Craftsmanship Section */}
        <section id="craftsmanship" className="py-20">
          <SwissCraftsmanship />
        </section>

        {/* 8. Signature Design Elements Section */}
        <section id="design-elements" className="py-20 bg-gradient-to-b from-[#050505] to-luxury-charcoal">
          <SignatureElements />
        </section>

        {/* 9. Product Comparison Section */}
        <section id="comparison" className="py-20">
          <ProductComparison />
        </section>

        {/* 10. Customer Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-b from-luxury-charcoal to-[#050505]">
          <CustomerExperience />
        </section>

        {/* 11. FAQ Section */}
        <section id="faq" className="py-20">
          <FAQ />
        </section>

        {/* 12. Call-To-Action (CTA) Section */}
        <section id="cta" className="py-20 bg-gradient-to-r from-luxury-charcoal via-luxury-black to-luxury-charcoal">
          <CTA />
        </section>
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Global Interactive Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={closeQuickView} 
          isInWishlist={wishlist.includes(quickViewProduct.id)}
          toggleWishlist={toggleWishlist}
        />
      )}
    </div>
  )
}

export default App
