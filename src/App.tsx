/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  MapPin,
  Home,
  Menu,
  X,
  Phone,
  ArrowRight,
  Key,
  DollarSign,
  Clock,
  HeartHandshake,
  TrendingUp,
  Users,
  Mail
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 20; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans antialiased text-white bg-[#0A1628] selection:bg-[#D4A017]/30 selection:text-white min-h-screen flex flex-col p-4 md:p-6 lg:p-8">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-6 max-w-[1400px] mx-auto w-full">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-8 h-8 bg-[#D4A017] rounded-md flex items-center justify-center text-[#0A1628] font-bold text-lg tracking-tighter group-hover:opacity-90 transition">
            M
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">MOVE NYC <span className="text-[#D4A017]">Real Estate</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300 items-center">
          <button onClick={() => scrollTo('services')} className="hover:text-[#D4A017] transition">Services</button>
          <button onClick={() => scrollTo('why-us')} className="hover:text-[#D4A017] transition">Why Us</button>
          <button onClick={() => scrollTo('team')} className="hover:text-[#D4A017] transition">Our Team</button>
          <button onClick={() => scrollTo('reviews')} className="hover:text-[#D4A017] transition">Reviews</button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white px-4 py-2 border border-[#D4A017] text-[#D4A017] rounded-full transition hover:bg-[#D4A017]/10"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#D4A017] transition">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#122338] border border-slate-700/50 rounded-2xl px-6 py-4 space-y-4 mb-4 max-w-[1400px] mx-auto w-full shadow-2xl">
          <button onClick={() => scrollTo('services')} className="block w-full text-left text-white py-2 hover:text-[#D4A017] transition">Services</button>
          <button onClick={() => scrollTo('why-us')} className="block w-full text-left text-white py-2 hover:text-[#D4A017] transition">Why Us</button>
          <button onClick={() => scrollTo('team')} className="block w-full text-left text-white py-2 hover:text-[#D4A017] transition">Our Team</button>
          <button onClick={() => scrollTo('reviews')} className="block w-full text-left text-white py-2 hover:text-[#D4A017] transition">Reviews</button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full border border-[#D4A017] text-[#D4A017] font-semibold py-3 rounded-full text-center mt-4 transition hover:bg-[#D4A017] hover:text-[#0A1628]"
          >
            Get in Touch
          </button>
        </div>
      )}

      {/* MAIN BENTO GRID */}
      <main className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-row-dense gap-4 max-w-[1400px] mx-auto w-full flex-grow">
        
        {/* HERO SECTION */}
        <section className="col-span-1 md:col-span-8 md:row-span-2 bg-gradient-to-br from-[#0e213b] to-[#0A1628] border border-slate-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017] opacity-5 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#D4A017] font-semibold text-xs tracking-widest uppercase mb-4 block italic">
                Serving All 5 Boroughs
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-white">
                Your Key to New York <br className="hidden lg:block" /> Living, Simplified.
              </h1>
              <p className="text-slate-400 max-w-xl mb-8 text-sm md:text-base leading-relaxed">
                Warm, community-focused, and hardworking. Whether you're hunting for the perfect rental, buying a coop, or selling your home—we don't stop until you get results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-[#D4A017] text-[#0A1628] font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors text-sm w-fit text-center">
                  Find My Apartment
                </button>
                <button onClick={() => scrollTo('contact')} className="border border-slate-600 bg-white/5 font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm w-fit text-center">
                  Sell My Home
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="col-span-1 md:col-span-4 md:row-span-3 bg-[#D4A017] text-[#0A1628] rounded-2xl p-6 lg:p-8 flex flex-col order-first md:order-none">
          <h3 className="text-2xl font-bold mb-1">Ready to Move?</h3>
          <p className="text-[#0A1628]/70 text-xs mb-6 uppercase tracking-wider font-bold italic">Get a response within 2 hours</p>
          <form 
            className="flex flex-col gap-4 flex-grow"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your interest! A MOVE NYC agent will be in touch shortly.");
            }}
          >
            <div>
              <label className="text-[10px] font-bold uppercase mb-1 block">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full p-3 rounded-lg bg-white/40 border border-[#0A1628]/10 placeholder:text-[#0A1628]/50 text-sm focus:outline-none focus:bg-white transition-colors" />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase mb-1 block">Phone Number</label>
              <input required type="tel" placeholder="(212) 555-0198" className="w-full p-3 rounded-lg bg-white/40 border border-[#0A1628]/10 placeholder:text-[#0A1628]/50 text-sm focus:outline-none focus:bg-white transition-colors" />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase mb-1 block">Looking to...</label>
              <select required className="w-full p-3 rounded-lg bg-white/40 border border-[#0A1628]/10 text-sm focus:outline-none focus:bg-white transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected>Select an option</option>
                <option value="rent">Rent an Apartment</option>
                <option value="buy">Buy a Home</option>
                <option value="sell">Sell My Property</option>
                <option value="coop">Coop Purchase</option>
              </select>
            </div>
            <div className="flex-grow">
              <label className="text-[10px] font-bold uppercase mb-1 block">Message</label>
              <textarea placeholder="How can we help?" className="w-full h-[100px] lg:h-[120px] p-3 rounded-lg bg-white/40 border border-[#0A1628]/10 placeholder:text-[#0A1628]/50 text-sm resize-none focus:outline-none focus:bg-white transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#0A1628] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity mt-2 flex items-center justify-center gap-2">
              GET IN TOUCH <ArrowRight size={18} />
            </button>
          </form>
        </section>

        {/* TRUST BAR */}
        <section className="col-span-1 md:col-span-8 bg-white/5 border border-slate-700/50 rounded-2xl p-6 lg:px-8 lg:py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">4.6★</span>
            <span className="text-[10px] uppercase tracking-tighter text-slate-400 leading-none">55 Google<br/>Reviews</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-700"></div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#D4A017]"><MapPin size={28}/></span>
            <span className="text-[10px] uppercase tracking-tighter text-slate-400 leading-none">All 5 NYC<br/>Boroughs</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-700"></div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#D4A017]"><Home size={28} /></span>
            <span className="text-[10px] uppercase tracking-tighter text-slate-400 leading-none">Buyers &<br/>Sellers</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-700"></div>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-2">
               <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#0A1628]"></div>
               <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-[#0A1628]"></div>
               <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-[#0A1628]"></div>
             </div>
             <span className="text-[10px] uppercase tracking-tighter text-slate-400 ml-2">Join 500+<br/>Moved Families</span>
          </div>
        </section>

        {/* SERVICES - RENT */}
        <section id="services" className="col-span-1 md:col-span-4 bg-[#122338] border border-slate-700 rounded-2xl p-6 xl:p-8 flex flex-col justify-center group hover:bg-[#1a2f4c] transition-colors">
          <div className="w-12 h-12 bg-[#0A1628] border border-slate-700 rounded-xl flex items-center justify-center text-[#D4A017] mb-5 group-hover:scale-110 transition-transform">
            <Key size={24} />
          </div>
          <h4 className="text-xl font-bold mb-3">Rent an Apartment</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Navigating the NYC rental market can be overwhelming. We streamline the search, champion your application, and secure the perfect space.
          </p>
        </section>

        {/* SERVICES - BUY */}
        <section className="col-span-1 md:col-span-4 bg-[#122338] border border-slate-700 rounded-2xl p-6 xl:p-8 flex flex-col justify-center group hover:bg-[#1a2f4c] transition-colors">
          <div className="w-12 h-12 bg-[#0A1628] border border-slate-700 rounded-xl flex items-center justify-center text-[#D4A017] mb-5 group-hover:scale-110 transition-transform">
            <Home size={24} />
          </div>
          <h4 className="text-xl font-bold mb-3">Buy a Home / Coop</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            From finding off-market condos to guiding first-time buyers completely through complex coop board processes.
          </p>
        </section>

        {/* SERVICES - SELL */}
        <section className="col-span-1 md:col-span-4 bg-[#122338] border border-slate-700 rounded-2xl p-6 xl:p-8 flex flex-col justify-center group hover:bg-[#1a2f4c] transition-colors">
          <div className="w-12 h-12 bg-[#0A1628] border border-slate-700 rounded-xl flex items-center justify-center text-[#D4A017] mb-5 group-hover:scale-110 transition-transform">
            <DollarSign size={24} />
          </div>
          <h4 className="text-xl font-bold mb-3">Sell Your Property</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
             Strategic pricing and aggressive marketing. We consistently secure multiple offers and execute fast closings in NYC.
          </p>
        </section>

        {/* AGENT SPOTLIGHT */}
        <section id="team" className="col-span-1 md:col-span-6 md:row-span-2 bg-[#122338] border border-slate-700 rounded-2xl p-6 lg:p-8 flex flex-col">
          <h4 className="text-[#D4A017] text-[10px] font-bold uppercase tracking-widest mb-6">Our Star Agents</h4>
          <p className="text-sm text-slate-400 mb-8 max-w-md leading-relaxed">Driven, knowledgeable, and relentlessly focused on your goals. Supported by a deep bench of excellence.</p>
          <div className="flex flex-col sm:flex-row gap-6 mt-auto">
            <div className="flex-1 border-l-2 border-[#D4A017] pl-4">
              <p className="font-bold text-base mb-1 text-white">Tiffany Daniels</p>
              <p className="text-xs text-slate-400 leading-relaxed italic">Most reviewed. Praised for patience and helping clients overcome housing hardships.</p>
            </div>
            <div className="flex-1 border-l-2 border-[#D4A017] pl-4">
              <p className="font-bold text-base mb-1 text-white flex items-center gap-2 flex-wrap">Norris James <span className="bg-[#D4A017] text-[#0A1628] text-[8px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">Founder</span></p>
              <p className="text-xs text-slate-400 leading-relaxed italic">Known for seamlessly guiding clients and closing deals fast with multiple offers.</p>
            </div>
            <div className="flex-1 border-l-2 border-slate-600 pl-4">
              <p className="font-bold text-base mb-1 text-white">Jeremy W.</p>
              <p className="text-xs text-slate-400 leading-relaxed italic">Unmatched hustle. Will show 6+ properties in one day to find your perfect fit.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL 1 */}
        <section id="reviews" className="col-span-1 md:col-span-3 md:row-span-2 bg-[#122338] border border-slate-700 rounded-2xl p-6 lg:p-8 flex flex-col relative justify-between">
           <div className="text-5xl absolute top-4 left-4 opacity-10 text-[#D4A017] font-serif">"</div>
           <p className="text-sm text-slate-300 leading-relaxed relative z-10 italic mt-6">
             "Norris helped me find a home one week before my wedding. The patience and expertise were unmatched. Simply the best in NYC!"
           </p>
           <div className="mt-8">
             <div className="flex text-[#D4A017] mb-2 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
             </div>
             <p className="text-[10px] font-bold text-[#D4A017] uppercase tracking-wider">— Sarah K., Manhattan Buyer</p>
           </div>
        </section>

        {/* TESTIMONIAL 2 */}
        <section className="col-span-1 md:col-span-3 md:row-span-2 bg-gradient-to-br from-[#0A1628] to-[#122338] border border-slate-700/50 rounded-2xl p-6 lg:p-8 flex flex-col relative justify-between">
           <div className="text-5xl absolute top-4 left-4 opacity-10 text-[#D4A017] font-serif">"</div>
           <p className="text-sm text-slate-300 leading-relaxed relative z-10 italic mt-6">
             "We listed our condo in the Bronx with MOVE NYC. We received multiple strong offers within just one week of listing!"
           </p>
           <div className="mt-8">
             <div className="flex text-[#D4A017] mb-2 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
             </div>
             <p className="text-[10px] font-bold text-[#D4A017] uppercase tracking-wider">— David L., Seller</p>
           </div>
        </section>

        {/* WHY US - FEATURES */}
         <section id="why-us" className="col-span-1 md:col-span-12 bg-[#122338] border border-slate-700 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-[#D4A017] font-bold tracking-widest uppercase text-[10px] mb-2">Why Move NYC</h2>
              <h3 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
                Not Your Average Real Estate Brokerage.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We're built exactly for the pace and people of this city. Thousands of agencies exist in New York—here is what our reviews say truly sets us apart.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
               <div className="bg-white/5 border border-slate-700/50 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                     <Clock className="text-[#D4A017] w-5 h-5"/>
                     <h4 className="font-bold text-sm">Highly Responsive</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Same-day contact and constant updates. In a fast-moving market, we never leave you waiting.</p>
               </div>
               
               <div className="bg-white/5 border border-slate-700/50 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                     <HeartHandshake className="text-[#D4A017] w-5 h-5"/>
                     <h4 className="font-bold text-sm">Endless Patience</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">We operate on your timeline. Our agents work with clients for years to find the perfect fit.</p>
               </div>

               <div className="bg-white/5 border border-slate-700/50 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                     <TrendingUp className="text-[#D4A017] w-5 h-5"/>
                     <h4 className="font-bold text-sm">Results-Driven</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">From generating multiple offers in a week to closing complex coops, we get deals done.</p>
               </div>

               <div className="bg-white/5 border border-slate-700/50 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                     <Users className="text-[#D4A017] w-5 h-5"/>
                     <h4 className="font-bold text-sm">Community First</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">We help everyone with equal effort and no judgment—including clients overcoming bad credit.</p>
               </div>
            </div>
         </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-500 max-w-[1400px] mx-auto w-full gap-4">
        <div className="text-center md:text-left">© 2025 MOVE NYC REAL ESTATE, LLC • SERVING MANHATTAN, BROOKLYN, QUEENS, BRONX, STATEN ISLAND</div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 hover:text-[#D4A017] cursor-pointer transition"><Phone size={12}/> (555) 123-4567</span>
          <span className="flex items-center gap-1 hover:text-[#D4A017] cursor-pointer transition"><Mail size={12}/> HELLO@MOVENYC.COM</span>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <a 
        href="https://auroraadv.co/?tab=wizard" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#D4A017] text-[#0A1628] font-bold text-xs sm:text-sm w-24 h-24 sm:w-[110px] sm:h-[110px] rounded-full shadow-[0_10px_25px_rgba(212,160,23,0.4)] hover:scale-105 transition-transform z-50 flex items-center justify-center text-center p-3 leading-tight border-2 sm:border-4 border-[#0A1628] hover:bg-white"
      >
        Get this website for only $999
      </a>
    </div>
  );
}
