import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Target, Search, Workflow, BarChart3 } from 'lucide-react';

export default function LeadIntelligence() {
  return (
    <ArticleLayout
      title="From Lead Generation to Lead Intelligence: How AI Reshapes B2B"
      description="The era of spray-and-pray outbound is over. Discover how AI transforms raw lead generation into predictive lead intelligence."
      date="August 15, 2026"
      readTime="10 min read"
      category="Product Strategy"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
      relatedProject={{
        title: "ProspectIQ by Kava",
        description: "A deep dive into how we built an AI-driven platform that turns raw data into actionable B2B sales intelligence.",
        link: "/case-study/prospectiq"
      }}
    >
      <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
        For the last decade, B2B lead generation was a numbers game. You bought a massive list of emails, loaded them into a sequencing tool, and hoped a 1% conversion rate would hit your quota. 
      </p>
      
      <blockquote className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-6 my-10 bg-blue-50 py-4 rounded-r-2xl pr-4">
        Today, that approach destroys domain reputations and burns out sales teams. The paradigm has shifted from <span className="text-blue-600">Lead Generation</span> to <span className="text-blue-600">Lead Intelligence</span>.
      </blockquote>

      <h2>What is Lead Intelligence?</h2>
      <p>
        Lead Intelligence is the application of machine learning to predict <em>when</em> an account is ready to buy, <em>who</em> the actual decision-maker is, and <em>what</em> specific message will resonate.
      </p>
      
      <h2 className="mt-16 mb-8">The 3 Pillars of AI-Driven Outbound</h2>
      
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
            <Search size={28} />
          </div>
          <div>
            <h3 className="!mt-0 !mb-2 text-xl font-bold">1. Intent Data Parsing</h3>
            <p className="text-gray-600 text-sm md:text-base !mb-0">
              Instead of guessing, AI algorithms monitor first-party and third-party intent signals. If a company just raised a Series B and their Engineering VP is suddenly researching "SOC2 compliance tools," an intelligent system flags this account as a hot lead for cybersecurity software.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shrink-0">
            <Target size={28} />
          </div>
          <div>
            <h3 className="!mt-0 !mb-2 text-xl font-bold">2. Dynamic Personalization at Scale</h3>
            <p className="text-gray-600 text-sm md:text-base !mb-0">
              We are moving past <code>{"{{first_name}}"}</code> and <code>{"{{company_name}}"}</code>. True intelligence systems analyze a prospect's recent LinkedIn posts, company press releases, and 10-K filings to generate highly contextual, one-to-one messaging that actually sounds human.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
            <Workflow size={28} />
          </div>
          <div>
            <h3 className="!mt-0 !mb-2 text-xl font-bold">3. Automated Pipeline Routing</h3>
            <p className="text-gray-600 text-sm md:text-base !mb-0">
              Not all leads are created equal. AI models score incoming leads based on historical closed-won data. High-value enterprise leads are instantly routed to Account Executives, while SMB leads are directed to self-serve flows or junior SDRs.
            </p>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      <div className="flex items-center gap-4 mb-6">
        <BarChart3 className="text-gray-400" size={32} />
        <h2 className="!mt-0 !mb-0">The ProspectIQ Example</h2>
      </div>
      <p>
        When building platforms like ProspectIQ, the architectural focus isn't just on storing data—it's on the real-time processing of signals. By structuring complex data lakes and applying NLP (Natural Language Processing), we turn raw noise into a sniper-rifle approach for sales teams.
      </p>
    </ArticleLayout>
  );
}