import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare, Eye, Search, Mail } from 'lucide-react';

const SocialMetrics = ({ isDark }) => (
  <div className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 p-3 rounded-full backdrop-blur-md border ${isDark ? 'bg-black/20 border-white/10 text-white/90' : 'bg-white/60 border-black/5 text-gray-700'} z-20 shadow-sm`}>
    <button className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors group" aria-label="Like">
      <ThumbsUp size={18} className="group-hover:-translate-y-1 transition-transform" />
      <span className="text-[10px] font-medium">2.4k</span>
    </button>
    <button className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors group" aria-label="Dislike">
      <ThumbsDown size={18} className="group-hover:translate-y-1 transition-transform" />
      <span className="text-[10px] font-medium">12</span>
    </button>
    <button className="flex flex-col items-center gap-1 hover:text-green-500 transition-colors group" aria-label="Comment">
      <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
      <span className="text-[10px] font-medium">148</span>
    </button>
    <div className="flex flex-col items-center gap-1 mt-2 pt-2 border-t border-current/20" title="Visitors">
      <Eye size={18} />
      <span className="text-[10px] font-medium">12k</span>
    </div>
  </div>
);

const AuthorBadge = ({ isDark }) => (
  <div className={`flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-sm">
      <img src="https://media.contra.com/image/upload/h_160,w_160/pyyju4uqxxwa6kxdrghl.avif" alt="Yasir Basheer" className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col text-left">
      <span className="text-sm font-semibold">Yasir Basheer</span>
      <span className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Senior Project Manager</span>
    </div>
  </div>
);

function Articles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Project Management', 'AI Workflows', 'CRO', 'Product Strategy'];

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 selection:bg-gray-200 selection:text-black flex flex-col">
      <Helmet>
        <title>Articles | Yasir Basheer</title>
        <meta name="description" content="Read articles and insights on project management, AI workflows, and e-commerce product design." />
        <link rel="canonical" href="https://www.yasirbasheer.live/articles" />
      </Helmet>

      {/* Ultra Clean Minimal Hero */}
      <header className="w-full pt-12 pb-6 flex flex-col items-center relative z-10">
        <nav className="w-full px-8 max-w-[1400px] mx-auto mb-16">
          <Link to="/" className="inline-flex items-center gap-2 px-5 py-2 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium text-gray-600">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </nav>

        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Articles & Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium">
            Thoughts, frameworks, and deep dives into engineering, design, and scalable execution.
          </p>
        </div>
      </header>

      {/* Pill-shaped Filter & Search Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 mb-16 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-full p-2 shadow-sm border border-gray-200">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide w-full md:w-auto px-2 pb-2 md:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64 mt-2 md:mt-0 flex-shrink-0 px-2 md:px-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-gray-50 rounded-full py-2.5 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all border border-transparent focus:border-gray-900"
            />
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col gap-12 w-full flex-grow">

        {/* Card 1: Blue Centered Hero (Visual Product Design) */}
        <section className="w-full rounded-[40px] bg-[#1E40AF] text-white p-12 md:p-20 relative overflow-hidden shadow-xl flex flex-col items-center text-center group transition-transform duration-500 hover:scale-[1.01]">
          <SocialMetrics isDark={true} />
          {/* Decorative abstract elements (Placeholders for 3D graphics) */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <AuthorBadge isDark={true} />
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-6">Article</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">The power of visual in product design</h2>
            <p className="text-blue-100 text-sm md:text-base max-w-md mb-10 leading-relaxed">
              How visual elements affect our perception, recognition and memory by interacting with digital products.
            </p>
            <Link to="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-md transition-colors text-sm font-semibold">
              Full article <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Card 2: Sand/Beige Split (Bookify) */}
        <section className="w-full rounded-[40px] bg-[#F3EBE1] text-[#1e1e1e] p-8 md:p-16 relative overflow-hidden shadow-sm flex flex-col justify-between group transition-transform duration-500 hover:scale-[1.01]">
          <SocialMetrics isDark={false} />
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16 pr-0 md:pr-12">
            <div className="w-full md:w-1/2 flex flex-col items-start z-10">
              <AuthorBadge isDark={false} />
              <span className="text-[#4338CA] font-bold text-sm tracking-wide mb-8">Bookify</span>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 leading-[1.05] tracking-tight text-[#2E1065]">
                Acclaimed<br/>books right to<br/>your phone
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm mb-8">
                Bookify is a community based on collaboration that makes reading more accessible to +1.5 million readers seeking a profound cultural experience. We connect book lovers — looking to exchange their insights for community — with incredible authors in more than 100 countries.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center z-10 relative h-[400px]">
                {/* Phone mockup placeholder */}
                <div className="w-[240px] h-[480px] bg-white rounded-[36px] shadow-2xl border-8 border-gray-900 absolute top-0 -rotate-3 overflow-hidden">
                   <div className="w-full h-full bg-gray-100 p-4">
                     <div className="w-full h-24 bg-gray-200 rounded-xl mb-4"></div>
                     <div className="w-full h-32 bg-gray-300 rounded-xl mb-4"></div>
                     <div className="w-full h-32 bg-gray-200 rounded-xl"></div>
                   </div>
                </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="w-full bg-[#E5D5C5]/50 backdrop-blur-sm rounded-3xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
            <div className="flex items-center gap-4 pl-2">
              <div className="w-10 h-10 rounded-xl bg-[#2E1065] text-white flex items-center justify-center font-bold text-lg">b</div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900">Bookify</span>
                <span className="text-[10px] text-gray-500">★★★★★ 4.5</span>
              </div>
            </div>
            <Link to="#" className="px-6 py-3 bg-[#4338CA] hover:bg-[#3730A3] text-white rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
              Bookify Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Card 3: White Split (Worldpackers) */}
        <section className="w-full rounded-[40px] bg-white text-[#1e1e1e] p-8 md:p-16 relative overflow-hidden shadow-sm flex flex-col justify-between group transition-transform duration-500 hover:scale-[1.01]">
          <SocialMetrics isDark={false} />
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-16 pr-0 md:pr-12">
            <div className="w-full md:w-1/2 flex justify-center z-10 relative h-[400px]">
                {/* Phone mockups placeholder */}
                <div className="w-[200px] h-[400px] bg-white rounded-[32px] shadow-2xl border-8 border-gray-900 absolute top-10 left-10 -rotate-6 overflow-hidden z-10">
                   <div className="w-full h-full bg-gray-50 p-4">
                     <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>
                   </div>
                </div>
                <div className="w-[200px] h-[400px] bg-white rounded-[32px] shadow-2xl border-8 border-gray-900 absolute top-0 right-10 rotate-3 overflow-hidden">
                   <div className="w-full h-full bg-gray-100 p-4">
                     <div className="w-full h-32 bg-gray-300 rounded-xl mb-4"></div>
                   </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start z-10 pl-0 md:pl-10">
              <AuthorBadge isDark={false} />
              <span className="text-gray-900 font-bold text-lg tracking-wide mb-6">Worldpackers</span>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 leading-[1.05] tracking-tight">
                A world of ways<br/>to travel the<br/>world
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                Worldpackers is a community based on collaboration that makes travel more accessible to +1.5 million travelers seeking a profound cultural experience. We connect travelers — looking to exchange their skills for accommodation — with incredible hosts in more than 100 countries.
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="w-full bg-gray-50 rounded-3xl p-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 border border-gray-100">
            <div className="flex items-center gap-8 pl-2 flex-wrap justify-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-xs">W</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-900">Worldpackers</span>
                  <span className="text-[9px] text-gray-500">★★★★★ 4.9</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">A</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-900">App of the day</span>
                  <span className="text-[9px] text-gray-500">2019</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-900">Editors' choice</span>
                  <span className="text-[9px] text-gray-500">Innovation in Brazil</span>
                </div>
              </div>
            </div>
            <Link to="#" className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
              Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      {/* Dark Footer Block */}
      <footer className="w-full mt-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 mb-12">
          <div className="w-full bg-[#1A1A1A] text-white rounded-[32px] p-10 md:p-14 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            {/* Background grain for dark mode */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-sm relative z-10">
              <span className="text-xl">🤝</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 max-w-xl leading-tight relative z-10">
              Have an interesting project?
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <a href="mailto:yasirmughal668@gmail.com" className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://wa.me/923188201038" className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-bold transition-colors flex items-center justify-center gap-2 shadow-lg text-sm">
                WhatsApp <span className="font-medium text-gray-600">(+92 318 8201038)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Footer */}
        <div className="w-full border-t border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div>© {new Date().getFullYear()} All rights reserved.</div>
            <div className="flex items-center gap-8">
              <a href="https://linkedin.com/in/yasirbasheer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
              <a href="https://contra.com/yasir_basheer" className="hover:text-gray-900 transition-colors">Contra</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Articles;