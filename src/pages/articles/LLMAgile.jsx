import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Bot, Terminal, Blocks, Zap } from 'lucide-react';

export default function LLMAgile() {
  return (
    <ArticleLayout
      title="How LLMs are Redefining Agile Sprint Planning"
      description="Learn how to architect custom AI pipelines using LangChain to eliminate administrative overhead in engineering sprints."
      date="August 25, 2026"
      readTime="8 min read"
      category="AI & Workflows"
      relatedProject={{
        title: "AI-Powered Sprint Workflows",
        description: "Explore how we implemented custom internal tools to speed up engineering velocity and eliminate manual documentation.",
        link: "/"
      }}
    >
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-3xl my-8 shadow-xl">
        <p className="text-xl leading-relaxed font-light !mb-0 text-gray-200">
          Project managers spend up to 40% of their week doing administrative overhead: writing Jira tickets, summarizing meeting transcripts, and generating release notes. Engineers spend another 10% trying to decipher those tickets. <strong className="text-white">With the rise of Large Language Models (LLMs), this administrative tax is no longer necessary.</strong>
        </p>
      </div>

      <div className="flex items-center gap-3 mt-12 mb-6">
        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
          <Terminal size={24} />
        </div>
        <h2 className="!mt-0 !mb-0 text-3xl font-bold">The End of Manual Ticket Creation</h2>
      </div>
      
      <p>
        By integrating APIs like OpenAI or Anthropic with your project management tools (Jira, Linear, Asana), you can automate the translation of raw product requirements into structured technical tickets.
      </p>
      
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-8">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Blocks size={18} className="text-indigo-500" />
          The LangChain Pipeline
        </h4>
        <p className="text-sm text-gray-600 mb-4">A standard product requirement document (PRD) can be fed into an LLM pipeline built with LangChain, which then outputs:</p>
        <ul className="space-y-3 mb-0 text-sm">
          <li className="flex items-center gap-2 !mb-0"><Zap size={14} className="text-yellow-500" /> A parent Epic with acceptance criteria.</li>
          <li className="flex items-center gap-2 !mb-0"><Zap size={14} className="text-yellow-500" /> Sequential sub-tasks for frontend and backend.</li>
          <li className="flex items-center gap-2 !mb-0"><Zap size={14} className="text-yellow-500" /> Edge cases and QA testing scenarios automatically generated.</li>
        </ul>
      </div>

      <div className="flex items-center gap-3 mt-12 mb-6">
        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
          <Bot size={24} />
        </div>
        <h2 className="!mt-0 !mb-0 text-3xl font-bold">Automating the Stand-up</h2>
      </div>
      
      <p>
        Another massive friction point is the daily stand-up. Instead of synchronous meetings that interrupt flow state, teams can use asynchronous text updates in Slack. 
      </p>
      <blockquote className="text-xl font-medium text-gray-600 border-l-4 border-purple-500 pl-6 my-8">
        An internal AI bot can read all updates, identify blockers, cross-reference them with the codebase repository, and flag high-risk sprint items to the Project Manager before 9 AM.
      </blockquote>

      <h2>Implementation Strategy</h2>
      <p>
        Do not try to replace your entire workflow overnight. Start small to build trust with your engineering team:
      </p>
      
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
          <p className="!mb-0 text-sm font-medium">Create a simple script that generates PR summaries.</p>
        </div>
        <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
          <p className="!mb-0 text-sm font-medium">Build a Slack bot that writes release notes based on merged commits.</p>
        </div>
        <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
          <p className="!mb-0 text-sm font-medium">Scale up to automated ticket generation.</p>
        </div>
      </div>
    </ArticleLayout>
  );
}