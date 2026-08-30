import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Copy, Mail, Handshake, ExternalLink, ArrowRight, ArrowLeft, ArrowUpRight, Search, Target, Zap, TrendingUp, Monitor, Smartphone, PenTool, Code2 } from 'lucide-react';
import gsap from 'gsap';
import '../App.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentExpSlide, setCurrentExpSlide] = useState(0);
  const careerRef = useRef(null);

  const changeExpSlide = useCallback((direction) => {
    let ctx = gsap.context(() => {
      gsap.to('.exp-title-anim', { opacity: 0, x: -20, duration: 0.3, ease: 'power2.in' });
      gsap.to('.exp-point-anim', { opacity: 0, scale: 0.9, y: 10, duration: 0.2, stagger: 0.05, ease: 'power2.in', onComplete: () => {
        setCurrentExpSlide(prev => {
          if (direction === 'next') return prev === 4 ? 0 : prev + 1;
          return prev === 0 ? 4 : prev - 1;
        });
      }});
    }, careerRef);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.exp-title-anim', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo('.exp-point-anim',
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }
      );
    }, careerRef);
    return () => ctx.revert();
  }, [currentExpSlide]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yasirmughal668@gmail.com');
    alert('Email copied to clipboard!');
  };

  const experience = [
    {
      company: "Tru Sport Brands",
      role: "Project Manager",
      date: "Jan 2024 - Present",
      points: [
        "Conversion Rate Optimization: Owned end-to-end CRO for EM Cosmetics and NUorganics — introducing structured processes to accelerate conversion-issue identification, prioritize the testing backlog, and streamline the pipeline from insight to shipped fix.",
        "AI-Driven Process Transformation: Designed and deployed custom AI documentation pipelines using LangChain and LLMs, cutting administrative overhead and sprint planning effort by 40%.",
        "Team Scaling & Velocity: Built, structured, and onboarded a high-performing full-stack engineering team from scratch, improving delivery bandwidth and reducing time-to-market by 30%.",
        "Rapid MVP Execution: Architected and delivered a multi-tiered MVP from concept to production release in 1.5 months against an initial 8-month traditional timeline.",
        "Cross-Functional Execution: Spearheaded end-to-end technical project execution across scalable e-commerce infrastructure, backend service integrations, and operational workflows, coordinating 15+ engineers, UI/UX designers, and business stakeholders."
      ]
    },
    {
      company: "TSK Services LLC",
      role: "Project Manager",
      date: "Mar 2023 - Dec 2023",
      points: [
        "AI Workflow Automation: Architected and deployed AI-powered operational workflows using LangChain and GPT models to automate backlog grooming, technical documentation, and sprint status reporting, reducing administrative overhead by 40%.",
        "Requirements Engineering: Translated strategic brand goals, market analytics, and direct customer feedback into actionable engineering user stories, API contracts, and technical specifications for seamless sprint execution.",
        "Mid-Funnel & SEO Optimization: Directed engineering execution for mid-funnel web application modules, collaborating with growth marketing to enhance SEO architecture, site performance, and acquisition metrics.",
        "Metrics & Visibility: Established centralized Jira/ClickUp reporting structures to track burndown charts, lead/cycle times, and key performance metrics for executive leadership."
      ]
    },
    {
      company: "Antity",
      role: "Project Manager",
      date: "Jan 2020 - Mar 2023",
      points: [
        "Engineering Team Building: Led recruitment, technical onboarding, and mentoring of an in-house software engineering team, eliminating external offshore dependencies and accelerating delivery cycles by 30%.",
        "Scope & Requirement Standardization: Standardized a comprehensive requirement-gathering framework incorporating wireframing and user journey mapping, decreasing scope ambiguity and reducing post-sprint rework by 25%.",
        "Vendor & Client Management: Supervised multi-disciplinary outsourced vendor teams on client web applications, holding weekly budget and milestone reviews to ensure strict compliance with growth objectives.",
        "Strategic Business Alignment: Acted as the core interface between C-suite stakeholders and technical dev teams, resolving execution bottlenecks and facilitating cross-departmental alignment."
      ]
    },
    {
      company: "INFRA",
      role: "Project Manager & Tech Lead",
      date: "Jun 2020 - Dec 2021",
      type: "Contract",
      points: [
        "Full-Lifecycle Startup Delivery: Managed project scope, timelines, and technical deliverables for multiple service-based early-stage startup products from inception through deployment, achieving a 100% on-time milestone success rate.",
        "Financial & Budget Governance: Oversaw project operational budgets, resource allocations, and vendor invoices; maintained project financial variance consistently under 5%.",
        "Agile & DevOps Orchestration: Led the company-wide transition from waterfall to Agile/Scrum; partnered with DevOps teams to integrate automated CI/CD pipelines and improve operational readiness."
      ]
    },
    {
      company: "Eyeora VR",
      role: "Associate Product Manager",
      date: "Jan 2020 - Jun 2021",
      type: "Contract",
      points: [
        "Accelerated MVP Launch: Partnered closely with founding stakeholders from initial product ideation through full deployment; recruited and managed a cross-functional team of 8 engineers and UI/UX designers.",
        "Compressed Timeline Execution: Spearheaded rapid sprint iterations that successfully launched a production-ready MVP in 1.5 months against an initial 8-month projected roadmap.",
        "Product Roadmap Execution: Supported the Product Director in defining feature backlogs and roadmap execution for an enterprise VR platform."
      ]
    }
  ];

  const projects = [
    {
      title: 'Bake Me Happy',
      category: 'AI & Full-Stack',
      description: 'A comprehensive, end-to-end artisanal bakery operating system. Replaces chaotic manual processes with a premium storefront and a highly intelligent backend featuring a 3D Cake Customizer.',
      tags: ['React', 'AI', 'Full-Stack', 'E-commerce'],
      geography: 'United States',
      flag: '🇺🇸',
      image: '/bakemehappy.png',
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
      link: 'https://prospect-iq-psi.vercel.app/landing-page/index.html'
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
      <Helmet>
        <title>Yasir Basheer | Senior Project Manager & AI-Driven Delivery</title>
        <meta name="description" content="Senior Technical Project Manager specializing in E-commerce CRO, AI/ML workflows, and full-stack technical execution. Explore my portfolio and case studies." />
        <link rel="canonical" href="https://www.yasirbasheer.live/" />
        <meta property="og:title" content="Yasir Basheer | Senior Project Manager" />
        <meta property="og:description" content="Senior Technical Project Manager specializing in E-commerce CRO, AI/ML workflows, and full-stack technical execution." />
        <meta property="og:image" content="https://www.yasirbasheer.live/og-banner.png" />
        <meta property="og:url" content="https://www.yasirbasheer.live" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yasir Basheer",
              "jobTitle": "Senior Technical Project Manager",
              "url": "https://www.yasirbasheer.live/",
              "sameAs": [
                "https://linkedin.com/in/yasirbasheer",
                "https://contra.com/yasir_basheer"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What services do you provide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "I specialize in E-commerce Conversion Rate Optimization (CRO), Agile Project Management, scaling engineering teams, and integrating AI workflows using LangChain and LLMs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you approach Conversion Rate Optimization (CRO)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "I start with the fundamentals: ensuring core web vitals are green and the UX is frictionless across all devices before moving into advanced multivariate and psychological testing."
                    }
                  }
                ]
              }
            `}
          </script>
      </Helmet>
      
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
                href="/Yasir%20Basheer%20Resume.pdf" 
                target="_blank" 
                className="px-5 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                CV
              </a>
              <Link 
                to="/articles" 
                className="px-5 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Articles
              </Link>
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
             <div className="text-lg md:text-xl font-semibold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity tracking-wide uppercase">E-Commerce</div>
             <div className="text-lg md:text-xl font-semibold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity tracking-wide uppercase">CRO & Analytics</div>
             <div className="text-lg md:text-xl font-semibold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity tracking-wide uppercase">AI Workflows</div>
             <div className="text-lg md:text-xl font-semibold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity tracking-wide uppercase">Product Strategy</div>
             <div className="text-lg md:text-xl font-semibold text-gray-500 grayscale opacity-80 hover:opacity-100 transition-opacity tracking-wide uppercase">Team Leadership</div>
          </div>
        </div>

        <div className="px-2 sm:px-4 md:px-6 w-full flex flex-col gap-10 md:gap-16 max-w-[1920px] mx-auto">
          
          {/* Services Section */}
          <div id="services" className="pt-12 md:pt-16 pb-0 px-4 flex flex-col items-center text-center relative w-full">
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
          <div className="pt-0 pb-6 md:pb-10 px-4 flex flex-col items-center text-center relative w-full">
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
                              {['Kava by Mitra', 'ProspectIQ'].includes(project.title) ? (
                                <Link 
                                  to={project.title === 'Kava by Mitra' ? "/case-study/kava" : "/case-study/prospectiq"}
                                  className="bg-[#11161A] hover:bg-black text-white px-5 py-3 rounded-full text-[11px] font-medium flex items-center justify-between transition-colors shadow-sm w-full group/btn"
                                >
                                  <span>Read Case Study</span>
                                  <div className="bg-white/10 p-1.5 rounded-full group-hover/btn:bg-white/20 transition-colors">
                                    <ArrowUpRight size={12} />
                                  </div>
                                </Link>
                              ) : (
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
                              )}
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
                              loading="lazy"
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
                aria-label="Previous Project"
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 border border-white/10 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                aria-label="Next Project"
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 border border-white/10 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              >
                <ArrowRight size={20} />
              </button>
            </div>

          </div>

          {/* Core Competencies Section */}
          <div className="pt-12 md:pt-16 pb-0 px-6 w-full max-w-[1200px] mx-auto text-left relative z-10 border-t border-gray-100">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Left Column */}
              <div className="lg:w-1/3 flex flex-col items-start">
                <div className="w-12 h-12 mb-8 bg-black rounded-full flex items-center justify-center text-white shadow-sm">
                  <TrendingUp size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl md:text-[56px] font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Core<br />Competencies
                </h2>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  A comprehensive technical and operational toolkit to scale digital products and teams.
                </p>
              </div>

              {/* Right Column Grid */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-4 lg:mt-0">
                
                {/* Item 1 */}
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 mb-4 text-gray-900 flex items-center justify-center">
                    <Target size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">E-commerce & CRO</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Shopify Theme Optimization, A/B Testing & Experimentation, Conversion Rate Optimization, Subscription CPG, Landing Page Strategy, Brand Launch & Growth
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 mb-4 text-gray-900 flex items-center justify-center">
                    <Handshake size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">Project & Team Leadership</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Agile, Scrum, Kanban, Sprint Planning, Cross-Functional Pod Leadership, Client Relationship Ownership, Vendor Management
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 mb-4 text-gray-900 flex items-center justify-center">
                    <Zap size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">AI & Automation</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    LangChain, Prompt Engineering, AI Workflow Automation, Automated QA Pipelines, NLP, LLM Integration
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 mb-4 text-gray-900 flex items-center justify-center">
                    <Code2 size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">Technical Fluency</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Python, Django, Django REST Framework, JavaScript, RESTful APIs, AWS, GCP, Microservices
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Professional Experience Slider */}
          <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 mb-4">
            
            {/* Global Section Heading */}
            <div className="pt-0 pb-6 md:pb-10 px-4 flex flex-col items-center text-center relative w-full mb-8">
              <div className="bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm border border-gray-100 z-10 text-gray-600 mb-6">
                Career
              </div>
              <h2 className="text-2xl md:text-[36px] font-medium text-gray-900 max-w-2xl leading-tight tracking-tight">
                Translating complex technical challenges into streamlined, scalable solutions.
              </h2>
            </div>

            {/* Slider Container */}
            <div ref={careerRef} className="bg-[#ECECEC] rounded-[40px] md:rounded-[60px] py-12 md:py-20 px-8 md:px-16 shadow-sm flex flex-col lg:flex-row relative overflow-hidden items-center">
              
              {/* Left Side: Title & Dates */}
              <div className="flex flex-col items-start lg:w-[40%] lg:pr-16 mb-16 lg:mb-0">
                
                <div className="min-h-[140px] md:min-h-[160px]">
                  <h2 className="exp-title-anim text-5xl md:text-[56px] font-medium text-gray-900 tracking-tight leading-[1.1] mb-4">
                    {experience[currentExpSlide].role}
                  </h2>
                  
                  <p className="exp-title-anim text-base md:text-lg text-gray-800 font-light mb-16 leading-relaxed max-w-sm">
                    {experience[currentExpSlide].company} <br />
                    <span className="text-gray-500">{experience[currentExpSlide].date}</span>
                  </p>
                </div>
                
                <div className="flex items-center flex-wrap gap-4 mt-auto">
                  <a href="mailto:yasirmughal668@gmail.com" className="bg-black text-white px-7 h-12 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-md text-sm md:text-base">
                    Hire Me!
                  </a>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => changeExpSlide('prev')}
                      aria-label="Previous Career Experience"
                      className="w-12 h-12 rounded-full border border-gray-300 bg-white/50 flex items-center justify-center hover:bg-white transition-colors text-gray-700 hover:text-black"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button 
                      onClick={() => changeExpSlide('next')}
                      aria-label="Next Career Experience"
                      className="w-12 h-12 rounded-full border border-gray-300 bg-white/50 flex items-center justify-center hover:bg-white transition-colors text-gray-700 hover:text-black"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Black Box with Bullets */}
              <div className="lg:w-[60%] flex w-full">
                <div className="bg-[#0A0A0A] w-full rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col justify-center relative overflow-hidden min-h-[400px]">
                  {/* Subtle aesthetic glow inside the black box */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 relative z-10">
                    {experience[currentExpSlide].points.slice(0, 4).map((point, i) => {
                      const parts = point.split(':');
                      const title = parts[0];
                      const description = parts.slice(1).join(':').trim();
                      
                      return (
                        <div key={i} className="flex flex-col gap-2 exp-point-anim">
                          {description ? (
                            <>
                              <h4 className="text-sm font-semibold text-white tracking-wide">{title}</h4>
                              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{description}</p>
                            </>
                          ) : (
                            <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{point}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* end of padded content wrapper */}

        {/* Certifications Section */}
        <div className="py-16 md:py-24 px-4 flex flex-col items-center text-center relative w-full max-w-[1200px] mx-auto">
          <div className="bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm border border-gray-100 z-10 text-gray-600 mb-6">
            Certifications
          </div>
          <h2 className="text-2xl md:text-[36px] font-medium text-gray-900 max-w-2xl leading-tight tracking-tight mb-16">
            Professional credentials and continuous learning.
          </h2>

          <div className="w-full max-w-4xl">
            {[
              { name: 'Certified Scrum Master Practices', issuer: 'LinkedIn' },
              { name: 'AWS for Developers', issuer: 'LinkedIn Learning' },
              { name: 'Agile Project Governance Frameworks', issuer: 'Professional Development' },
            ].map((cert, i) => (
              <div key={i} className="flex items-start md:items-center gap-6 md:gap-10 py-8 border-b border-gray-200 last:border-0 text-left group">
                <span className="text-5xl md:text-7xl font-medium text-gray-200 leading-none tracking-tighter select-none group-hover:text-gray-900 transition-colors duration-300">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-medium text-gray-900 tracking-tight leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-400 font-light">{cert.issuer}</p>
                </div>
                <div className="hidden md:block w-2 h-2 rounded-full bg-gray-300 group-hover:bg-black transition-colors duration-300 shrink-0"></div>
              </div>
            ))}
          </div>
        </div>

          {/* CTA Card (Footer) */}
          <div className="bg-[#ECECEC] rounded-t-[40px] md:rounded-t-[60px] p-8 md:p-16 flex flex-col items-center text-center w-full mt-auto">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
               <Handshake size={28} strokeWidth={1.5} className="text-gray-800" />
            </div>
            <h2 className="text-4xl md:text-[56px] font-medium text-gray-900 mb-10 tracking-tight leading-tight">
              Hire Me!
            </h2>
            
            <div className="flex gap-4 mb-20">
              <a href="mailto:yasirmughal668@gmail.com" className="bg-[#222222] text-white px-7 py-3 rounded-full font-medium hover:bg-black transition-colors flex items-center gap-2 text-xs md:text-sm shadow-md">
                <Mail size={16} /> Email Me
              </a>
              <a href="https://wa.me/923188201038" className="bg-white text-gray-900 px-7 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-xs md:text-sm shadow-sm">
                WhatsApp (+92 318 8201038)
              </a>
            </div>
          
            <footer className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 pt-6 border-t border-gray-300 font-medium px-4">
              <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
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

export default Home;
