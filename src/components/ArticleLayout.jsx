import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare } from 'lucide-react';

export default function ArticleLayout({ 
  title, 
  description, 
  date, 
  category, 
  heroImage, 
  children
}) {
  const contentRef = useRef(null);
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    // 1. Find all h2 elements in the article content
    const elements = Array.from(contentRef.current.querySelectorAll('h2'));
    
    // 2. Generate IDs and extract text
    const extractedHeadings = elements.map((el, index) => {
      // If it doesn't have an ID, create one from the text
      if (!el.id) {
        el.id = el.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      }
      return {
        id: el.id,
        text: el.innerText
      };
    });
    
    setHeadings(extractedHeadings);

    // 3. Set up IntersectionObserver to highlight active TOC item
    const callback = (entries) => {
      // Find all intersecting elements
      const intersecting = entries.filter(entry => entry.isIntersecting);
      if (intersecting.length > 0) {
        // Just take the first one visible
        setActiveId(intersecting[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [children]);

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // offset for sticky headers if any
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>{title} | Yasir Basheer</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Hero Header Area */}
      <div className="bg-[#FAF9F6] rounded-b-[40px] pb-16 pt-8 md:pb-24">
         <div className="max-w-[1400px] mx-auto px-4 md:px-8">
           {/* Breadcrumbs */}
           <div className="flex items-center text-xs font-semibold tracking-wide text-gray-500 mb-8 gap-3">
             <Link to="/articles" className="hover:text-black transition-colors">Articles</Link>
             <span>{">"}</span>
             <span className="text-gray-900">{category}</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mt-4">
             {/* Title & Author (Left) */}
             <div className="w-full lg:w-1/2">
               <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] text-[#1e1e1e] tracking-tight mb-10 pr-0 lg:pr-10">
                 {title}
               </h1>
               <div className="flex items-center gap-3">
                 <img src="https://media.contra.com/image/upload/h_160,w_160/pyyju4uqxxwa6kxdrghl.avif" alt="Yasir Basheer" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                 <div className="text-xs md:text-sm font-medium text-gray-700 flex items-center flex-wrap">
                   <span className="font-bold text-gray-900">Yasir Basheer</span>
                   <span className="mx-2 text-gray-300">|</span>
                   <span className="text-gray-500">Last updated on {date}</span>
                 </div>
               </div>
             </div>
             
             {/* Hero Image (Right) */}
             <div className="w-full lg:w-1/2">
               <div className="w-full h-[300px] md:h-[400px] bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm">
                 <img 
                   src={heroImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"} 
                   className="w-full h-full object-cover" 
                   alt={title} 
                 />
               </div>
             </div>
           </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12 lg:gap-32 relative">
        
        {/* Left Sidebar (Sticky) */}
        <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-12 h-fit">
          
          {/* Share Actions */}
          <div className="mb-12">
            <h4 className="font-bold text-gray-900 mb-5 text-sm tracking-wide">Share this Article</h4>
            <div className="flex items-center gap-3">
               <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-900 font-bold transition-colors">
                  X
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-900 font-bold transition-colors">
                  in
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-700 transition-colors">
                  <Mail size={16} />
               </a>
            </div>
          </div>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-gray-100 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <h4 className="font-bold text-gray-900 mb-5 text-sm tracking-wide">In this Article</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                {headings.map((heading) => (
                  <li 
                    key={heading.id}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`flex items-start gap-2 cursor-pointer transition-colors ${activeId === heading.id ? 'font-bold text-gray-900' : 'text-gray-500 hover:text-gray-900 pl-6'}`}
                  >
                    {activeId === heading.id && (
                      <div className="w-4 h-4 mt-0.5 rounded-full border-[5px] border-gray-900 flex-shrink-0 flex items-center justify-center"></div>
                    )}
                    <span className="leading-tight">{heading.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Prose Content (Right) */}
        <div 
          ref={contentRef}
          className="flex-1 max-w-[800px] text-lg text-gray-700 leading-[1.8] font-light 
          [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-16 [&>h2]:mb-8 
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-12 [&>h3]:mb-6 
          [&>p]:mb-8 
          [&>ul]:list-none [&>ul]:pl-0 [&>ul]:mb-8 [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[10px] [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-gray-400 [&>ul>li::before]:rounded-full
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 
          [&>li]:mb-4 
          [&>strong]:font-semibold [&>strong]:text-gray-900
          [&>blockquote]:text-xl [&>blockquote]:font-serif [&>blockquote]:italic [&>blockquote]:text-gray-900 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-900 [&>blockquote]:pl-6 [&>blockquote]:my-12 [&>blockquote]:py-2 [&>blockquote]:bg-[#FAF9F6] [&>blockquote]:rounded-r-2xl [&>blockquote]:pr-4">
          {children}
        </div>
      </div>

      {/* Dark Footer CTA */}
      <footer className="w-full mt-20 pb-0">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mb-16">
          <div className="bg-[#1C1C1C] rounded-[40px] text-white p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-noise opacity-20"></div>
            
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-sm relative z-10">
              <MessageSquare className="text-white" size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 max-w-xl leading-tight relative z-10 text-white">
              Have an interesting project?
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <a href="mailto:yasirmughal668@gmail.com" className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-sm text-white">
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
