import React, { useRef, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  { title: 'Bake Me Happy', category: 'AI & Full-Stack', image: '/bakemehappy.png' },
  { title: 'Kava by Mitra', category: 'E-commerce Brand Build', image: '/kava.png' },
  { title: 'ProspectIQ', category: 'AI Platform', image: '/prospectIQ.png' }
];

const experience = [
  { company: "Tru Sport Brands", role: "Project Manager", date: "Jan 2024 - Present", points: ["Point 1", "Point 2", "Point 3", "Point 4"] },
  { company: "TSK Services LLC", role: "Project Manager", date: "Mar 2023 - Dec 2023", points: ["Point 1", "Point 2", "Point 3", "Point 4"] },
  { company: "Antity", role: "Project Manager", date: "Jan 2020 - Mar 2023", points: ["Point 1", "Point 2", "Point 3", "Point 4"] }
];

export default function Option3() {
  const [currentProj, setCurrentProj] = useState(0);
  const [currentExp, setCurrentExp] = useState(0);
  
  const projRef = useRef(null);
  const expRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax Depth
      gsap.fromTo('.proj-slide', 
        { scale: 0.8, opacity: 0, rotationY: 15 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 0.8, ease: "power3.out", transformPerspective: 1000 }
      );
    }, projRef);
    return () => ctx.revert();
  }, [currentProj]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Seamless Morph
      gsap.fromTo('.exp-box',
        { scale: 1.02, backgroundColor: "#1a1a1a" },
        { scale: 1, backgroundColor: "#0a0a0a", duration: 0.6, ease: "power2.out" }
      );
      gsap.fromTo('.exp-content',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.1 }
      );
    }, expRef);
    return () => ctx.revert();
  }, [currentExp]);

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden p-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 mb-12"><ArrowLeft size={16} /> Back to Home</Link>
      <h1 className="text-3xl font-bold mb-24">Option 3: Parallax Depth & Seamless Morph</h1>

      {/* Portfolio Section */}
      <div ref={projRef} className="max-w-6xl mx-auto mb-48">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <div className="flex gap-4">
            <button onClick={() => setCurrentProj(Math.max(0, currentProj - 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowLeft size={20}/></button>
            <button onClick={() => setCurrentProj(Math.min(projects.length - 1, currentProj + 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowRight size={20}/></button>
          </div>
        </div>
        
        <div className="proj-slide bg-[#0A0A0A] rounded-[32px] p-12 h-[600px] flex items-center justify-center relative overflow-hidden shadow-2xl">
          <img src={projects[currentProj].image} className="w-full h-full object-contain relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 flex flex-col justify-end p-12">
            <span className="text-gray-400 mb-2">{projects[currentProj].category}</span>
            <h3 className="text-white text-4xl font-bold">{projects[currentProj].title}</h3>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <div ref={expRef} className="max-w-6xl mx-auto mb-48">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-8">Career</h2>
            <div className="flex gap-4">
              <button onClick={() => setCurrentExp(Math.max(0, currentExp - 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowLeft size={20}/></button>
              <button onClick={() => setCurrentExp(Math.min(experience.length - 1, currentExp + 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowRight size={20}/></button>
            </div>
          </div>
          <div className="w-full md:w-2/3 exp-box bg-[#0A0A0A] text-white p-12 rounded-[32px] min-h-[400px]">
            <div className="exp-content">
              <h3 className="text-3xl font-bold mb-2">{experience[currentExp].role}</h3>
              <p className="text-xl text-gray-400 mb-8">{experience[currentExp].company} • {experience[currentExp].date}</p>
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
