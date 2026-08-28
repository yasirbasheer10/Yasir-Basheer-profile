import React, { useState, useEffect } from 'react';
import { Copy, Mail, Handshake, ExternalLink, ArrowRight, ArrowLeft, ArrowUpRight, Search, Target, Zap, TrendingUp, Monitor, Smartphone, PenTool, Code2 } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yasirmughal668@gmail.com');
    alert('Email copied to clipboard!');
  };

  const projects = [
    {
      title: 'Base44 "Glow"',
      category: 'AI & Full-Stack',
      description: 'A comprehensive, end-to-end artisanal bakery operating system. Replaces chaotic manual processes with a premium storefront and a highly intelligent backend featuring a 3D Cake Customizer.',
      tags: ['React', 'AI', 'Full-Stack', 'E-commerce'],
      geography: 'United States',
      flag: '🇺🇸',
      image: 'https://media.contra.com/image/upload/q_auto:good,w_1500/jp940pljdurzhl75rs0e.avif',
      link: 'https://bakehappy.base44.app/'
    },
    {
      title: 'Kava by Mitra',
      category: 'E-commerce Brand Build',
      description: 'Built the Kava by Mitra e-commerce brand from the ground up in direct partnership. Owned the Shopify storefront build, launch strategy, and operational foundation.',
      tags: ['Shopify', 'CRO', 'UX/UI', 'Brand Launch'],
      geography: 'United States',
      flag: '🇺🇸',
      image: '/kava.png',
      link: 'https://kava-drink.co/'
    },
    {
      title: 'ProspectIQ',
      category: 'AI Platform',
      description: 'Architected and built an end-to-end AI-driven lead discovery and qualification platform. Integrates LLM-based data extraction, automated opportunity scoring, and AI outreach generation.',
      tags: ['LangChain', 'Python', 'React', 'LLMs'],
      geography: 'United States',
      flag: '🇺🇸',
      image: '/prospectIQ.png',
      link: '#'
    },
    {
      title: 'EM Cosmetics',
      category: 'CRO Strategy',
      description: 'Owned end-to-end Conversion Rate Optimization (CRO) on Shopify storefronts. Introduced a structured process to identify conversion issues faster and prioritize data-driven testing.',
      tags: ['A/B Testing', 'Analytics', 'Strategy', 'Shopify'],
      geography: 'United States',
      flag: '🇺🇸',
      image: '/emcosmetics.png',
      link: 'https://www.emcosmetics.com/'
    },
    {
      title: 'Vela Bottle',
      category: 'UX/UI Design',
      description: 'A conversion-ready product landing page built in Framer. Features a full Shopify-style UX, bundle card system with tiered pricing, color picker interactions, and responsive design following best practices.',
      tags: ['Framer', 'E-commerce', 'UX/UI', 'CRO'],
      geography: 'United States',
      flag: '🇺🇸',
      image: '/vela.png',
      link: 'https://vela-bottle.framer.website/'
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <>
      <div className="bg-noise"></div>
      
      <div className="min-h-screen flex flex-col font-sans text-gray-900 mx-auto w-full">
        
        {/* Top Hero Card */}
        <div className="bg-[#ECECEC] rounded-b-[40px] md:rounded-b-[60px] pt-8 pb-10 px-6 md:px-12 flex flex-col relative w-full shadow-sm overflow-hidden mb-6 md:mb-10 max-w-[1920px] mx-auto">
          
          <header className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-20 gap-6 relative z-10 w-full max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4">
              <a href="mailto:yasirmughal668@gmail.com" className="text-xs md:text-sm font-medium hover:text-gray-600 transition-colors">
                yasirmughal668@gmail.com
              </a>
              <button 
                onClick={handleCopyEmail}
                className="px-5 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Copy
              </button>
              <a 
                href="/CV.pdf" 
                target="_blank" 
                className="px-5 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                CV
              </a>
            </div>
            <div className="flex gap-4 text-xs md:text-sm font-medium">
              <a href="https://linkedin.com/in/yasirbasheer" className="hover:text-gray-600 transition-colors">LinkedIn</a>
              <span className="text-gray-300">/</span>
              <a href="https://contra.com/yasir_basheer" className="hover:text-gray-600 transition-colors">Contra</a>
              <span className="text-gray-300">/</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Instagram</a>
            </div>
          </header>

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto z-10 mb-20 md:mb-28">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-white shadow-md bg-gray-200">
                <img 
                  src="https://media.contra.com/image/upload/h_160,w_160/pyyju4uqxxwa6kxdrghl.avif" 
                  alt="Yasir Basheer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-16 top-0 bg-white px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold shadow-sm transform rotate-[8deg] border border-gray-100 flex items-center gap-1 whitespace-nowrap">
                Yasir Basheer <span className="text-sm leading-none">👋</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-[50px] font-medium tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Building digital<br />products, brands, and<br />experience.
            </h1>
            
            <a href="#work" className="bg-[#222222] text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-black transition-colors flex items-center gap-2 shadow-md">
              Latest Shots
              <ArrowUpRight size={14} className="transform rotate-45" />
            </a>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-[#E4E4E4] rounded-t-[50%] scale-x-[1.5] origin-bottom z-0"></div>
          
          <div className="relative z-10 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 px-4 md:px-12 pb-8 max-w-[1400px] mx-auto w-full">
             <div className="text-lg md:text-xl font-bold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity tracking-tighter">Kava by Mitra</div>
             <div className="text-lg md:text-xl font-bold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity uppercase tracking-widest">EM Cosmetics</div>
             <div className="text-lg md:text-xl font-bold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity">NUorganics</div>
             <div className="text-lg md:text-xl font-bold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity font-serif">ProspectIQ</div>
             <div className="text-lg md:text-xl font-bold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity">Eyeora VR</div>
          </div>
        </div>

        <div className="px-2 sm:px-4 md:px-6 w-full flex flex-col gap-6 md:gap-10 max-w-[1920px] mx-auto">
          
          {/* Services Section */}
          <div id="services" className="py-12 md:py-20 px-4 flex flex-col items-center text-center relative w-full">
            <div className="absolute top-8 bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm transform -rotate-[4deg] border border-gray-100 z-10 text-gray-600">
              Services
            </div>
            
            <h2 className="text-2xl md:text-[36px] font-medium text-gray-900 max-w-2xl mb-16 leading-tight tracking-tight">
              Collaborate with brands and agencies<br />to create impactful results.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 w-full max-w-[1200px] text-left mx-auto">
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <Monitor size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">E-commerce & CRO</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Shopify Theme Optimization, A/B Testing & Experimentation, Conversion Rate Optimization, and Landing Page Strategy.
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <Smartphone size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Project & Team Leadership</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Agile, Scrum, Kanban, Sprint Planning, Cross-Functional Pod Leadership, and Client Relationship Ownership.
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <PenTool size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">AI & Automation</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  LangChain, Prompt Engineering, AI Workflow Automation, Automated QA Pipelines, and LLM Integration.
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <Code2 size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Technical Execution</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Python, Django, React, RESTful APIs, AWS, GCP, Microservices, and full-stack development.
                </p>
              </div>
            </div>
          </div>

          {/* Case Studies Header */}
          <div className="py-6 md:py-10 px-4 flex flex-col items-center text-center relative w-full">
            <div className="bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm transform -rotate-[2deg] border border-gray-100 z-10 text-gray-600 mb-6">
              Case Studies
            </div>
            <h2 className="text-2xl md:text-[36px] font-medium text-gray-900 max-w-2xl leading-tight tracking-tight">
              Selected work and real impact.
            </h2>
          </div>

          {/* New Portfolio Slider Matching Latest Image Exactly */}
          <div id="work" className="relative h-[650px] md:h-[800px] w-full group flex items-center justify-center overflow-hidden">
            
            <div className="w-full h-full relative">
              {projects.map((project, idx) => {
                
                let offset = idx - currentSlide;
                const total = projects.length;
                if (offset === total - 1) offset = -1;
                if (offset === -(total - 1)) offset = 1;
                
                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;
                
                return (
                  <div 
                    key={idx}
                    className={`absolute h-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] py-2 ${
                      isVisible ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                    style={{
                      width: '86%',
                      left: '50%',
                      transform: `translateX(calc(-50% + ${offset * 102.5}%)) scale(${isActive ? 1 : 0.92})`,
                      opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                      zIndex: isActive ? 30 : 20
                    }}
                  >
                    {/* The Slide Container with Dark Background & Rounded Corners */}
                    <div className="w-full h-full rounded-[32px] md:rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col md:flex-row p-3 md:p-4 gap-3 md:gap-4">
                      
                      {/* Subtly Blurred Background attached to the individual slide */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]" 
                        style={{ backgroundImage: `url(${project.image})` }} 
                      />
                      <div className="absolute inset-0 bg-[#353330]/30 backdrop-blur-[2px]"></div>

                      {/* Content (Z-index above background) */}
                      <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-3 md:gap-4">
                        
                        {/* Left Floating White Card (Increased Width and Reduced Padding) */}
                        <div className="w-full md:w-[320px] lg:w-[360px] h-full bg-[#F6F7F7] rounded-[24px] p-5 flex flex-col shadow-2xl relative z-20 flex-shrink-0">
                          <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight leading-none">{project.title}</h3>
                          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-auto">
                            {project.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="px-4 py-1.5 rounded-full border border-gray-200 text-[10px] md:text-[11px] font-medium text-gray-600 bg-transparent">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-8 flex flex-col gap-6">
                            <div>
                              <p className="text-[11px] text-gray-400 font-semibold mb-1">Geography</p>
                              <div className="flex items-center gap-2 font-semibold text-gray-900 text-sm md:text-base">
                                <span className="text-xl">{project.flag}</span> {project.geography}
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-2 w-full">
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-[#11161A] hover:bg-black text-white px-5 py-3 rounded-full text-[11px] font-medium flex items-center justify-between transition-colors shadow-sm w-full group/btn"
                              >
                                <span>Read Case Study</span>
                                <div className="bg-white/10 p-1.5 rounded-full group-hover/btn:bg-white/20 transition-colors">
                                  <ArrowUpRight size={12} />
                                </div>
                              </a>
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-full text-[11px] font-medium flex items-center justify-between transition-colors shadow-sm w-full group/btn2"
                              >
                                <span>Live Website</span>
                                <div className="bg-gray-100 p-1.5 rounded-full group-hover/btn2:bg-gray-200 transition-colors text-gray-600">
                                  <ExternalLink size={12} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Right Area (Image and Dashes) */}
                        <div className="w-full h-full flex flex-col flex-1 relative z-10 pt-2 pb-0">
                          {/* Progress Dashes - positioned above the image */}
                          <div className="flex justify-between w-full mb-3 px-2 gap-3">
                            {projects.map((_, dotIdx) => (
                              <button 
                                key={`dot-${dotIdx}`}
                                onClick={() => setCurrentSlide(dotIdx)}
                                className={`h-[2px] rounded-full transition-all duration-500 flex-1 ${
                                  currentSlide === dotIdx ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                              />
                            ))}
                          </div>

                          {/* Project Screenshot Container - Transparent background with floating image */}
                          <div className={`flex-1 w-full relative flex justify-center ${
                            ['Kava by Mitra', 'EM Cosmetics', 'Vela Bottle'].includes(project.title)
                              ? 'p-12 md:p-24 lg:p-32 pt-4 md:pt-8 lg:pt-12' 
                              : 'items-center p-2 md:p-4 lg:p-8'
                          }`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={`w-full h-full rounded-[12px] md:rounded-[16px] shadow-2xl ${
                                ['Kava by Mitra', 'EM Cosmetics', 'Vela Bottle'].includes(project.title) 
                                  ? 'object-contain object-top' 
                                  : 'object-contain object-center'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Global Navigation Arrows for Slider (Hover to reveal) */}
            <div className="absolute bottom-12 right-12 flex gap-3 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 border border-white/10 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 border border-white/10 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              >
                <ArrowRight size={20} />
              </button>
            </div>

          </div>

          {/* New Process Section */}
          <div className="py-12 md:py-20 px-4 flex flex-col items-center text-center relative w-full mb-8 mt-12">
            <div className="absolute top-8 bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm transform rotate-[3deg] border border-gray-100 z-10 text-gray-600">
              Process
            </div>
            
            <h2 className="text-2xl md:text-[36px] font-medium text-gray-900 max-w-2xl mb-16 leading-tight tracking-tight">
              A data-driven approach to delivering<br />scalable, high-converting solutions.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 w-full max-w-[1200px] text-left mx-auto">
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <Search size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Discovery & Audit</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Deep dive into business goals, funnel metrics, and user behavior to identify bottlenecks and high-impact opportunities.
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <Target size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Strategic Planning</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Architecting the solution—from A/B testing roadmaps to defining AI schemas and technical infrastructure for the build.
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <Zap size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Rapid Execution</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Agile development cycles delivering MVPs in weeks, not months. Leading cross-functional pods to ship features efficiently.
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
                <div className="w-10 h-10 mb-5 text-gray-800">
                  <TrendingUp size={28} strokeWidth={1} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Growth & Optimization</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                  Continuous monitoring, self-healing pipelines, and data-driven iteration to ensure scalable revenue outcomes and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card (Footer) */}
        <div className="bg-[#ECECEC] rounded-t-[40px] md:rounded-t-[60px] rounded-b-none p-8 md:p-16 shadow-sm flex flex-col items-center text-center w-full mt-auto max-w-[1920px] mx-auto">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
             <Handshake size={28} strokeWidth={1.5} className="text-gray-800" />
          </div>
          <h2 className="text-3xl md:text-[44px] font-medium text-gray-900 mb-10 tracking-tight leading-tight">
            Tell me about your next<br />project
          </h2>
          
          <div className="flex gap-4 mb-20">
            <a href="mailto:yasirmughal668@gmail.com" className="bg-[#222222] text-white px-7 py-3 rounded-full font-medium hover:bg-black transition-colors flex items-center gap-2 text-xs md:text-sm shadow-md">
              <Mail size={16} /> Email Me
            </a>
            <a href="https://wa.me/923188201038" className="bg-white text-gray-900 px-7 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-xs md:text-sm shadow-sm">
              WhatsApp
            </a>
          </div>
          
          <footer className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 pt-6 border-t border-gray-300 font-medium px-4">
            <div>© {new Date().getFullYear()} All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://linkedin.com/in/yasirbasheer" className="hover:text-gray-700 transition-colors">LinkedIn</a>
              <span className="text-gray-400">/</span>
              <a href="https://contra.com/yasir_basheer" className="hover:text-gray-700 transition-colors">Contra</a>
              <span className="text-gray-400">/</span>
              <a href="#" className="hover:text-gray-700 transition-colors">Instagram</a>
            </div>
          </footer>
        </div>
        
      </div>
    </>
  );
}

export default App;
