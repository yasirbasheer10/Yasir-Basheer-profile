import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import '../index.css';

function ProspectIQCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-[#FCFCFC] text-gray-900 font-sans selection:bg-gray-200 selection:text-black">
      <Helmet>
        <title>ProspectIQ - AI Platform Case Study | Yasir Basheer</title>
        <meta name="description" content="Case study on building ProspectIQ, an AI-powered B2B lead intelligence platform, integrating LLM-based data extraction and opportunity scoring." />
        <meta property="og:title" content="ProspectIQ - AI Platform Case Study" />
        <meta property="og:image" content="https://www.yasirbasheer.live/prospectIQ.png" />
      </Helmet>
      <div className="bg-noise"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-6 mix-blend-difference text-white flex justify-between items-center">
        <Link to="/" className="text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        <div className="bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm transform -rotate-[2deg] border border-gray-100 mb-6 text-gray-600">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          ProspectIQ
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-light leading-relaxed mb-8">
          AI-powered B2B lead intelligence that discovers, qualifies and prioritizes high-potential opportunities with evidence-backed research.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['AI Platform', 'LangChain', 'UX/UI', 'LLM Integration'].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-[11px] font-medium text-gray-600 bg-white">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href="https://prospect-iq-psi.vercel.app/landing-page/index.html" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#11161A] hover:bg-black text-white px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-transform hover:scale-105 shadow-xl"
        >
          Visit Live Website <ExternalLink size={14} />
        </a>
      </section>

      {/* Hero Image */}
      <section className="px-4 md:px-12 max-w-7xl mx-auto z-10 relative mb-24">
        <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-[#0A0A0A] p-4 md:p-8 flex items-center justify-center">
          <img 
            src="/prospectiq-dashboard.png" 
            alt="ProspectIQ Dashboard Screenshot" 
            className="w-full h-auto object-contain rounded-[12px] border border-gray-800"
          />
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-32 z-10 relative">
        
        {/* Overview */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            ProspectIQ discovers promising companies, explains why they matter, identifies the right buyer, and prepares the conversation — backed by evidence. It is designed to replace scattered signals with actionable opportunities by evaluating company fit, problem evidence, buying intent, and contactability.
          </p>
        </div>

        {/* The Challenge & My Approach */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">
              Most lead generation starts with a list. But a list does not tell you why a company is a fit, why "now" matters, who actually owns the problem, or what you should say. Sales teams waste time researching bad-fit accounts or sending generic outreach without proper context or verified evidence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I architected a background revenue agent that goes beyond standard list-building. Instead of just pulling data, the AI actively researches websites, business signals, and public information to create structured evidence. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              The platform separates what is strictly known (verified evidence) from what the AI infers (AI insight). This transparency ensures trust. The user defines their ideal geography, industries, and signals, and the AI agent researches, scores, and prioritizes the opportunities automatically.
            </p>
          </div>
        </div>

        {/* Discover UI Screenshot */}
        <div className="mb-20">
          <div className="w-full rounded-[24px] overflow-hidden shadow-xl bg-gray-50 border border-gray-100 p-4 md:p-6 mb-6">
            <img 
              src="/prospectiq-discover.png" 
              alt="ProspectIQ Discover Interface" 
              className="w-full h-auto object-contain rounded-[8px] shadow-sm border border-gray-200"
            />
          </div>
          <p className="text-sm text-gray-500 text-center font-light">
            The Discover interface allows users to define specific criteria, technologies, and buying signals for AI research.
          </p>
        </div>

        {/* Key Features & Skills */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span> <span className="leading-tight">AI-driven evidence research from public data</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span> <span className="leading-tight">Multi-factor Opportunity Scoring (confidence & fit)</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span> <span className="leading-tight">"Why Now" timing and intent detection</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span> <span className="leading-tight">Strict separation of Verified vs AI-Inferred insights</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span> <span className="leading-tight">Automated workflow from discovery to outreach</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span> <span className="leading-tight">Real-time background agent activity timeline</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {['LLM Integration', 'LangChain', 'Prompt Engineering', 'AI Workflow Automation', 'React', 'Data Extraction Pipelines', 'UI/UX Design', 'Dashboard Architecting'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-gray-50 text-gray-700 text-sm border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <hr className="my-10 border-gray-100" />
          
          <div>
            <h3 className="text-xl font-semibold mb-4">The Result</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              ProspectIQ turns scattered signals into prioritized, actionable opportunities. By letting the AI do the heavy lifting of research and qualification, sales teams can stay in control of the relationship—armed with context, the right buyer, and a personalized conversation starter before they even say hello.
            </p>
          </div>
        </div>

      </section>
    </article>
  );
}

export default ProspectIQCaseStudy;
