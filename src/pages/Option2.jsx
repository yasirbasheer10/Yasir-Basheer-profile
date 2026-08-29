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

export default function Option2() {
  const [currentProj, setCurrentProj] = useState(0);
  const [currentExp, setCurrentExp] = useState(0);
  
  const projRef = useRef(null);
  const expRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Wipe & Stagger Portfolio
      gsap.fromTo('.proj-image', 
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: "power3.inOut" }
      );
      gsap.fromTo('.proj-text',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
      );
    }, projRef);
    return () => ctx.revert();
  }, [currentProj]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pop Reveal Career
      gsap.fromTo('.exp-title',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo('.exp-point',
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)", delay: 0.2 }
      );
    }, expRef);
    return () => ctx.revert();
  }, [currentExp]);

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden p-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 mb-12"><ArrowLeft size={16} /> Back to Home</Link>
      <h1 className="text-3xl font-bold mb-24">Option 2: Editorial Wipe & Pop Reveal</h1>

      {/* Portfolio Section */}
      <div ref={projRef} className="max-w-6xl mx-auto mb-48 relative">
        <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
        <div className="flex bg-gray-50 rounded-[32px] overflow-hidden shadow-xl h-[600px]">
          <div className="w-1/3 p-12 flex flex-col justify-center">
            <span className="proj-text text-sm text-gray-400 mb-2">{projects[currentProj].category}</span>
            <h3 className="proj-text text-4xl font-bold mb-8">{projects[currentProj].title}</h3>
            <div className="proj-text flex gap-4 mt-auto">
              <button onClick={() => setCurrentProj(Math.max(0, currentProj - 1))} className="p-4 bg-white rounded-full shadow hover:bg-gray-50"><ArrowLeft size={20}/></button>
              <button onClick={() => setCurrentProj(Math.min(projects.length - 1, currentProj + 1))} className="p-4 bg-white rounded-full shadow hover:bg-gray-50"><ArrowRight size={20}/></button>
            </div>
          </div>
          <div className="w-2/3 bg-[#0A0A0A] relative proj-image">
            <img src={projects[currentProj].image} className="w-full h-full object-contain p-12" />
          </div>
        </div>
      </div>

      {/* Career Section */}
      <div ref={expRef} className="max-w-6xl mx-auto mb-48">
        <div className="flex gap-12">
          <div className="w-1/3 flex flex-col">
            <h2 className="text-2xl font-bold mb-12">Career</h2>
            <h3 className="exp-title text-3xl font-bold mb-2">{experience[currentExp].role}</h3>
            <p className="exp-title text-xl text-gray-500 mb-12">{experience[currentExp].company} <br/> {experience[currentExp].date}</p>
            <div className="flex gap-4 mt-auto">
              <button onClick={() => setCurrentExp(Math.max(0, currentExp - 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowLeft size={20}/></button>
              <button onClick={() => setCurrentExp(Math.min(experience.length - 1, currentExp + 1))} className="p-4 bg-gray-200 rounded-full hover:bg-gray-300"><ArrowRight size={20}/></button>
            </div>
          </div>
          <div className="w-2/3 bg-[#0A0A0A] p-12 rounded-[32px]">
            <div className="grid grid-cols-2 gap-8 h-full place-content-center">
              {experience[currentExp].points.map((pt, i) => (
                <div key={i} className="exp-point bg-gray-900 p-6 rounded-xl text-gray-300">
                  <span className="block text-white font-bold mb-2">0{i+1}</span>
                  {pt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
