import React, { useRef, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Bake Me Happy', category: 'AI & Full-Stack', image: '/bakemehappy.png', link: '#' },
  { title: 'Kava by Mitra', category: 'E-commerce Brand Build', image: '/kava.png', link: '#' },
  { title: 'ProspectIQ', category: 'AI Platform', image: '/prospectIQ.png', link: '#' }
];

const experience = [
  { company: "Tru Sport Brands", role: "Project Manager", date: "Jan 2024 - Present", points: ["Point 1", "Point 2", "Point 3", "Point 4"] },
  { company: "TSK Services LLC", role: "Project Manager", date: "Mar 2023 - Dec 2023", points: ["Point 1", "Point 2", "Point 3", "Point 4"] },
  { company: "Antity", role: "Project Manager", date: "Jan 2020 - Mar 2023", points: ["Point 1", "Point 2", "Point 3", "Point 4"] }
];

export default function Option1() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const [currentExp, setCurrentExp] = useState(0);
  const expContainerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal Scroll Portfolio
      const slides = gsap.utils.toArray('.portfolio-slide');
      
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollWrapperRef.current.offsetWidth
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Deck of cards transition
      gsap.fromTo('.exp-card', 
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }, expContainerRef);
    return () => ctx.revert();
  }, [currentExp]);

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden">
      <div className="p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70"><ArrowLeft size={16} /> Back to Home</Link>
        <h1 className="text-3xl font-bold mt-4">Option 1: Horizontal Scroll & Deck of Cards</h1>
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl text-gray-400">Scroll Down to see Portfolio Effect</h2>
      </div>

      {/* Portfolio ScrollTrigger Section */}
      <div ref={containerRef} className="h-screen w-full flex items-center overflow-hidden bg-white">
        <div ref={scrollWrapperRef} className="flex h-[80vh] w-[300vw]">
          {projects.map((proj, i) => (
            <div key={i} className="portfolio-slide w-screen h-full flex-shrink-0 flex items-center justify-center p-12">
              <div className="w-full max-w-5xl bg-gray-50 rounded-[32px] h-full flex overflow-hidden shadow-2xl">
                <div className="w-1/3 p-12 flex flex-col justify-center">
                  <span className="text-sm text-gray-400 mb-2">{proj.category}</span>
                  <h3 className="text-4xl font-bold mb-4">{proj.title}</h3>
                </div>
                <div className="w-2/3 bg-[#0A0A0A] p-12 flex items-center justify-center">
                  <img src={proj.image} className="max-h-full object-contain rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[50vh] flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl text-gray-400">Scroll Down for Career Section</h2>
      </div>

      {/* Career Section */}
      <div className="py-32 px-4 max-w-7xl mx-auto" ref={expContainerRef}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-8">Career</h2>
            <div className="flex gap-4">
              <button onClick={() => setCurrentExp(Math.max(0, currentExp - 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowLeft size={20}/></button>
              <button onClick={() => setCurrentExp(Math.min(experience.length - 1, currentExp + 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowRight size={20}/></button>
            </div>
          </div>
          <div className="w-full md:w-2/3 exp-card">
            <div className="bg-[#0A0A0A] text-white p-12 rounded-[32px] h-[400px]">
              <h3 className="text-3xl font-bold mb-2">{experience[currentExp].role}</h3>
              <p className="text-xl text-gray-400 mb-8">{experience[currentExp].company} � {experience[currentExp].date}</p>
              <div className="grid grid-cols-2 gap-8">
                {experience[currentExp].points.map((pt, i) => (
                  <div key={i} className="text-gray-300">{pt}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
