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
        <link rel="canonical" href="https://www.yasirbasheer.live/case-study/prospectiq" />
        <meta property="og:title" content="ProspectIQ - AI Platform Case Study" />
        <meta property="og:image" content="https://www.yasirbasheer.live/prospectIQ.png" />
        <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "ProspectIQ - AI Platform Case Study",
                "author": {
                  "@type": "Person",
                  "name": "Yasir Basheer"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Yasir Basheer Portfolio",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.yasirbasheer.live/og-banner.png"
                  }
                },
                "datePublished": "2026-08-30",
                "description": "Case study on building ProspectIQ, an AI-powered B2B lead intelligence platform, integrating LLM-based data extraction and opportunity scoring."
              }
            `}
          </script>
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
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            ProspectIQ discovers promising companies, explains why they matter, identifies the right buyer, and prepares the conversation — backed by evidence. It is designed to replace scattered signals with actionable opportunities by evaluating company fit, problem evidence, buying intent, and contactability.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            The core premise of the product is a pivot from traditional "Lead Generation" (buying lists of static emails) to "Lead Intelligence". The system operates as a background revenue agent that autonomously parses millions of data points across the web to score and rank B2B accounts. As the Lead Technical Project Manager, I architected the integration of advanced Large Language Models (LLMs) with traditional data scraping pipelines to build a system that not only finds leads, but contextually understands them.
          </p>
        </div>

        {/* The Challenge & My Approach */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">The Data Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most lead generation starts with a list. But a list does not tell you why a company is a fit, why "now" matters, who actually owns the problem, or what you should say. Sales teams waste an incredible amount of time researching bad-fit accounts or sending generic outbound sequences without proper context or verified evidence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When applying AI to this problem, the primary technical hurdle is hallucination. If an LLM tells an Account Executive that a prospect just raised a Series B, and the AE mentions it in an email, but the AI hallucinated the fact, the deal is dead instantly. We needed a system that enforced strict evidence-based extraction over creative generation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Architectural Strategy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I architected a pipeline using LangChain that separates what is strictly known (verified evidence) from what the AI infers (AI insight). This transparency ensures trust. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              The user defines their ideal geography, industries, and signals via the UI. Our backend agents then traverse web data (LinkedIn, SEC filings, press releases, career pages). The raw HTML/text is passed into a retrieval-augmented generation (RAG) pipeline where the LLM is heavily prompted to only return structured JSON arrays containing exact quotes (evidence) linked to specific URLs. If the AI cannot provide a source URL, the insight is discarded.
            </p>
          </div>
        </div>

        {/* Deep Dive into AI Execution */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">LLM Integration & Prompt Engineering</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            To achieve high fidelity in opportunity scoring, I managed the implementation of multi-step reasoning chains. Rather than asking a single LLM to evaluate an entire company, we deployed specialized agents:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</div>
              <div>
                <strong>The Intent Parser:</strong> A specialized model trained specifically to read recent news articles and press releases to identify hiring surges, funding rounds, or leadership changes.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</div>
              <div>
                <strong>The Technographic Scanner:</strong> An agent that analyzes a company's career page job descriptions to infer what internal software stack they are currently running (e.g., if they are hiring a "Looker Developer," they run GCP/Looker).
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</div>
              <div>
                <strong>The Synthesis Engine:</strong> The final LLM step that takes the outputs of all previous agents, runs a weighted algorithm against the user's Ideal Customer Profile (ICP), and assigns a final "Opportunity Score" from 0-100.
              </div>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-lg">
            This robust, multi-agent architecture allowed ProspectIQ to scale horizontally and process thousands of accounts asynchronously, returning highly accurate, non-hallucinated sales intelligence directly to the user's dashboard.
          </p>
        </div>

        {/* Key Features & Skills */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-8 text-center">Implementation Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['LangChain', 'OpenAI APIs', 'RAG Architecture', 'React/Next.js', 'Prompt Engineering', 'Data Pipelines', 'System Architecture', 'Product Management'].map(skill => (
              <div key={skill} className="bg-gray-50 py-3 px-4 rounded-xl text-sm font-medium text-gray-700 border border-gray-100">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </section>
    </article>
  );
}

export default ProspectIQCaseStudy;